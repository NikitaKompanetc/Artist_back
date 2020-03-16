import * as jwt from 'jsonwebtoken'
import { Injectable } from '@nestjs/common' 
import { Repository, DeleteResult, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Token } from './token.entity'
import { User } from '../users/user.entity'
import { JWT_REFRESH_TIME, JWT_REFRESH_SECRET, JWT_ACCESS_TIME, JWT_ACCESS_SECRET } from 'src/config/auth'

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>
  ) { }

  async findAll(): Promise<any> {
    const [items, totalCount] = await this.tokenRepository.findAndCount()
    return { items, totalCount }
  }

  findOne(where): Promise<Token> {
    return this.tokenRepository.findOne({ where })
  }

  create(token: Token): Promise<Token> {
    return this.tokenRepository.save(token)
  }

  update(token: Token): Promise<Token> {
    return this.tokenRepository.save(token)
  }

  delete(options): Promise<DeleteResult> {
    return this.tokenRepository.delete(options)
  }

  async exists(options): Promise<boolean> {
    return Boolean(
      await this.tokenRepository.count(options)
    )
  }

  private createTokens(userId: number, role: string, refreshTokenId?: string): { accessToken, refreshToken } {
    return {
      accessToken: jwt.sign(
        { userId, role },
        JWT_ACCESS_SECRET,
        {
          expiresIn: JWT_ACCESS_TIME
        }
      ),
      refreshToken: jwt.sign(
        { userId },
        JWT_REFRESH_SECRET,
        {
          expiresIn: JWT_REFRESH_TIME,
          jwtid: refreshTokenId || String(Date.now())
        }
      )
    }
  }

  async attachTokens(user: User, optionalTokenId?: string) {
    const newTokens = this.createTokens(user.id, user.role, optionalTokenId)
    const { jti, exp } = jwt.decode(newTokens.refreshToken)
    await this.tokenRepository.save({
      refreshTokenId: jti,
      expiresAt: exp,
      user
    })
    return newTokens
  }

  async deleteToken(req, res): Promise<void> {
    try {
      const token = req.signedCookies.refreshToken
      if (token) {
        await this.delete({
          refreshTokenId: jwt.decode(token).jti
        })
      }
    } finally {
      res.clearCookie('refreshToken').clearCookie('accessToken')
    }
  }
}