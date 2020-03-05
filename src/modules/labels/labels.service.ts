import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Label } from './label.entity' 

@Injectable()
export class LabelsService {
  constructor(
    @InjectRepository(Label)
    private readonly labelRepository: Repository<Label>,
  ) { }

  async findAll(query): Promise<{ labels: Label[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [labels, totalCount] = await this.labelRepository.findAndCount(options)
    return { labels, totalCount }
  }

  findOne(id): Promise<Label> {
    return this.labelRepository.findOne(id) 
  }

  create(artist: Label): Promise<Label> {
    return this.labelRepository.save(artist) 
  }

  update(artist: Label): Promise<Label> {
    return this.labelRepository.save(artist) 
  }

  delete(id): Promise<DeleteResult> {
    return this.labelRepository.delete(id) 
  }
}