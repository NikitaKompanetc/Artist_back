import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Format } from './format.entity' 

@Injectable()
export class FormatsService {
  constructor(
    @InjectRepository(Format)
    private readonly formatRepository: Repository<Format>
  ) { }

  findAll(): Promise<Format[]> {
    return this.formatRepository.find() 
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