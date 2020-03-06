import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Style } from './style.entity' 

@Injectable()
export class StylesService {
  constructor(
    @InjectRepository(Style)
    private readonly styleRepository: Repository<Style>
  ) { }

  async findAll(query): Promise<{ items: Style[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [items, totalCount] = await this.styleRepository.findAndCount(options)
    return { items, totalCount }
  }

  findOne(id): Promise<Style> {
    return this.styleRepository.findOne(id)
  }

  create(style: Style): Promise<Style> {
    return this.styleRepository.save(style)
  }

  update(style: Style): Promise<Style> {
    return this.styleRepository.save(style)
  }

  delete(id): Promise<DeleteResult> {
    return this.styleRepository.delete(id)
  }
}