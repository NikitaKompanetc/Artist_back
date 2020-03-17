import { Injectable } from '@nestjs/common' 
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { User } from '../users/user.entity'
import { TokensService } from '../tokens/tokens.service'
import { JWT_REFRESH_SECRET, JWT_ACCESS_SECRET } from 'src/config/auth'

const cookieOptions = {
  maxAge: 10000000000,
  httpOnly: true,
  signed: true,
  sameSite: true
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private tokensService: TokensService
  ) { }

  private getBrowserId(req): string | undefined {
    // getting browserId from refreshToken
    const token = req.signedCookies.refreshToken
    if (token) {
      return jwt.decode(token).browserId
    }
  }

  async getMyData(req, res) {
    try {
      // verifying and decoding of provided token
      const token = req.signedCookies.accessToken
      const { userId, role } = await jwt.verify(token, JWT_ACCESS_SECRET)

      res.status(200).json({ userId, role })
    } catch (e) {
      res.sendStatus(401)
    }
  }

  async register(req, res) {
    try {
      // deleting existing tokens
      const browserId = this.getBrowserId(req)
      await this.tokensService.deleteToken(res, browserId)

      // checking existing of user with provider email
      const isDBUser = await this.usersService.exists({ email: req.body.email })
      if (isDBUser) {
        return res.status(409).json({ message: 'This email is already in use' })
      }

      // creating new user
      const user = await this.usersService.create({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        role: 'user',
      } as User)

      // creating new tokens
      const { accessToken, refreshToken } = await this.tokensService.attachTokens(user, browserId)

      res
        .cookie('accessToken', accessToken, cookieOptions)
        .cookie('refreshToken', refreshToken, cookieOptions)
        .sendStatus(201)
    } catch (e) {
      res.sendStatus(500)
    }
  }

  async login(req, res) {
    try {
      // deleting existing tokens
      const browserId = this.getBrowserId(req)
      await this.tokensService.deleteToken(res, browserId)

      // checking passwords match
      const user = await this.usersService.findOne({ email: req.body.email })
      const passwordMatch = await bcrypt.compare(req.body.password, user.password)
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Email or password is not valid' })
      }

      // creating new tokens
      const { accessToken, refreshToken } = await this.tokensService.attachTokens(user, browserId)

      res
        .cookie('accessToken', accessToken, cookieOptions)
        .cookie('refreshToken', refreshToken, cookieOptions)
        .sendStatus(200)
    } catch (e) {
      res.sendStatus(500)
    }
  }
  
  async logout(req, res) {
    try {
      // deleting existing tokens
      const browserId = this.getBrowserId(req)
      await this.tokensService.deleteToken(res, browserId)
    } finally {
      res.sendStatus(200)
    }
  }

  async refreshTokens(req, res) {
    try {
      // verifying and decoding of provided token
      const token = req.signedCookies.refreshToken
      const { userId, browserId, jti: tokenId } = await jwt.verify(token, JWT_REFRESH_SECRET)

      // checking existing and deleting of token in db
      const deleteResult = await this.tokensService.delete({ 
        browserId,
        tokenId
      })
      const isDeleted = deleteResult.raw[1]
      if (!isDeleted) {
        throw new Error
      }

      // creating new tokens
      const user = await this.usersService.findOne({ id: userId })
      const { accessToken, refreshToken } = await this.tokensService.attachTokens(user, browserId)

      res
        .cookie('accessToken', accessToken, cookieOptions)
        .cookie('refreshToken', refreshToken, cookieOptions)
        .sendStatus(200)
    } catch (e) {
      // deleting existing tokens
      const browserId = this.getBrowserId(req)
      await this.tokensService.deleteToken(res, browserId)

      res.sendStatus(401)
    }
  }
}