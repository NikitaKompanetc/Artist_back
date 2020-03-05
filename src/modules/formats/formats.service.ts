import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Format } from './format.entity' 

@Injectable()
export class FormatsService {
  constructor(
    @InjectRepository(Format)
    private readonly formatRepository: Repository<Format>
  ) { }

  async findAll(query): Promise<{ formats: Format[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [formats, totalCount] = await this.formatRepository.findAndCount(options)
    return { formats, totalCount }
  }

  findOne(id): Promise<Format> {
    return this.formatRepository.findOne(id)
  }

  create(format: Format): Promise<Format> {
    return this.formatRepository.save(format)
  }

  update(format: Format): Promise<Format> {
    return this.formatRepository.save(format)
  }

  delete(id): Promise<DeleteResult> {
    return this.formatRepository.delete(id)
  }
}