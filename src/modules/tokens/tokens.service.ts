import * as jwt from 'jsonwebtoken'
import { Injectable } from '@nestjs/common' 
import { Repository, DeleteResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Token } from './token.entity'
import { User } from '../users/user.entity'
import { JWT_REFRESH_TIME, JWT_REFRESH_SECRET, JWT_ACCESS_TIME, JWT_ACCESS_SECRET } from 'src/config/auth'
import { v4 as uuid } from 'uuid'

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

  private createTokens(userId: number, role: string, browserId: string): { accessToken, refreshToken } {
    return {
      accessToken: jwt.sign(
        { userId, role },
        JWT_ACCESS_SECRET,
        {
          expiresIn: JWT_ACCESS_TIME
        }
      ),
      refreshToken: jwt.sign(
        { 
          userId, 
          browserId
        },
        JWT_REFRESH_SECRET,
        {
          expiresIn: JWT_REFRESH_TIME,
          jwtid: uuid()
        }
      )
    }
  }

  async attachTokens(user: User, browserId = uuid()) {
    // creating tokens
    const newTokens = this.createTokens(user.id, user.role, browserId)

    // saving tokens into db
    const { jti: tokenId, exp: expiresAt } = jwt.decode(newTokens.refreshToken)
    await this.tokenRepository.save({
      browserId,
      tokenId,
      expiresAt, 
      user: { id: 17 }
    })
    return newTokens
  }

  async deleteToken(res, browserId?: string): Promise<void> {
    // delete token from cookies and db by browserId
    try {
      if (browserId) {
        await this.delete({ browserId })
      }
    } finally {
      res.clearCookie('refreshToken').clearCookie('accessToken')
    }
  }
}