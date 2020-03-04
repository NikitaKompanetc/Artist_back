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

  findAll({ autocomplete }): Promise<Label[]> {
    const options: any = {};
    if (autocomplete) {
      options.where = {
        name: Like(`%${autocomplete}%`)
      }
    }
    return this.labelRepository.find(options) 
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