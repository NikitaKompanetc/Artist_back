import { Injectable } from '@nestjs/common' 
import { Repository, DeleteResult, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Token } from './token.entity'

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

  async findOne(where): Promise<Token> {
    const token = await this.tokenRepository.findOne({ where })
    return token
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
}