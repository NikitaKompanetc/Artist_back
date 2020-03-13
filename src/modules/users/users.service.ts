import { Injectable } from '@nestjs/common' 
import { User } from './user.entity'
import { Repository, DeleteResult, Like } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async findAll(query): Promise<{ items: User[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [items, totalCount] = await this.userRepository.findAndCount(options)
    return { items, totalCount }
  }

  async findOne(where): Promise<User> {
    const user = await this.userRepository.findOne({ where })
    return user
  }

  create(user: User): Promise<User> {
    return this.userRepository.save(user)
  }

  update(user: User): Promise<User> {
    return this.userRepository.save(user)
  }

  delete(id): Promise<DeleteResult> {
    return this.userRepository.delete(id)
  }
}