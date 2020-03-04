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

  findAll({ autocomplete }): Promise<Format[]> {
    const options: any = {};
    if (autocomplete) {
      options.where = {
        name: Like(`%${autocomplete}%`)
      }
      options.take = 5;
    }
    return this.formatRepository.find(options) 
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