import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult } from  'typeorm';
import { Release } from './release.entity';

@Injectable()
export class ReleasesService {
  constructor(
    @InjectRepository(Release)
    private readonly artistRepository: Repository<Release>,
  ) { }

  findAll(): Promise<Release[]> {
    return this.artistRepository.find();
  }

  findOne(id): Promise<Release> {
    return this.artistRepository.findOne(id);
  }

  create(artist: Release): Promise<Release> {
    return this.artistRepository.save(artist);
  }

  update(artist: Release): Promise<Release> {
    return this.artistRepository.save(artist);
  }

  delete(id): Promise<DeleteResult> {
    return this.artistRepository.delete(id);
  }
}