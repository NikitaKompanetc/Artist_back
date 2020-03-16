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
  signed: true
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private tokensService: TokensService
  ) { }

  async getMyData(req, res) {
    try {
      const token = req.signedCookies.accessToken
      const { userId, role } = await jwt.verify(token, JWT_ACCESS_SECRET)
      res.status(200).json({ userId, role })
    } catch (e) {
      res.sendStatus(401)
    }
  }

  async register(req, res) {
    try {
      await this.tokensService.deleteToken(req, res)

      const isDBUser = await this.usersService.exists({ email: req.body.email })
      if (isDBUser) {
        return res.status(409).json({ message: 'This email is already in use' })
      }

      const user = await this.usersService.create({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        role: 'user',
      } as User)

      const { accessToken, refreshToken } = await this.tokensService.attachTokens(user)

      res
        .cookie('accessToken', accessToken, cookieOptions)
        .cookie('refreshToken', refreshToken, cookieOptions)
        .sendStatus(201)
    } catch (e) {
      res.sendStatus(400)
    }
  }

  async login(req, res) {
    try {
      await this.tokensService.deleteToken(req, res)

      const user = await this.usersService.findOne({ email: req.body.email })
      const passwordMatch = await bcrypt.compare(req.body.password, user.password)
      if (!passwordMatch) {
        throw new Error
      }

      const { accessToken, refreshToken } = await this.tokensService.attachTokens(user)

      res
        .cookie('accessToken', accessToken, cookieOptions)
        .cookie('refreshToken', refreshToken, cookieOptions)
        .sendStatus(200)
    } catch (e) {
      res.status(400).json({ message: 'Email or password is not valid' })
    }
  }

  async logout(req, res) {
    try {
      await this.tokensService.deleteToken(req, res)
    } finally {
      res.sendStatus(200)
    }
  }

  async refreshTokens(req, res) {
    try {
      const token = req.signedCookies.refreshToken
      const { userId, jti: refreshTokenId, exp: expiresAt } = await jwt.verify(token, JWT_REFRESH_SECRET)

      const deleteResult = await this.tokensService.delete({ 
        refreshTokenId,
        expiresAt
      })
      const isDeleted = deleteResult.raw[1]
      if (!isDeleted) {
        throw new Error
      }

      const user = await this.usersService.findOne({ id: userId })
      const { accessToken, refreshToken } = await this.tokensService.attachTokens(user, refreshTokenId)

      res
        .cookie('accessToken', accessToken, cookieOptions)
        .cookie('refreshToken', refreshToken, cookieOptions)
        .sendStatus(200)
    } catch (e) {
      await this.tokensService.deleteToken(req, res)
      res.status(401).json({ message: 'Please relogin' })
    }
  }
}