import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult } from  'typeorm';
import { Label } from './label.entity';

@Injectable()
export class LabelsService {
  constructor(
    @InjectRepository(Label)
    private readonly labelRepository: Repository<Label>,
  ) { }

  findAll(): Promise<Label[]> {
    return this.labelRepository.find();
  }

  findOne(id): Promise<Label> {
    return this.labelRepository.findOne(id);
  }

  create(artist: Label): Promise<Label> {
    return this.labelRepository.save(artist);
  }

  update(artist: Label): Promise<Label> {
    return this.labelRepository.save(artist);
  }

  delete(id): Promise<DeleteResult> {
    return this.labelRepository.delete(id);
  }
}