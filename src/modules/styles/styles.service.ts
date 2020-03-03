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

  findAll({ autocomplete }): Promise<Style[]> {
    const options: any = {};
    if (autocomplete) {
      options.where = {
        name: Like(`%${autocomplete}%`)
      }
    }
    return this.styleRepository.find(options) 
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