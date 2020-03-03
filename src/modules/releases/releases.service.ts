import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Release } from './release.entity' 

@Injectable()
export class ReleasesService {
  constructor(
    @InjectRepository(Release)
    private readonly releaseRepository: Repository<Release>,
  ) { }

  findAll(): Promise<Release[]> {
    return this.releaseRepository.find() 
  }

  findOne(id): Promise<Release> {
    return this.releaseRepository.findOne(id) 
  }

  create(release: Release): Promise<Release> {
    return this.releaseRepository.save(release) 
  }

  update(release: Release): Promise<Release> {
    return this.releaseRepository.save(release) 
  }

  delete(id): Promise<DeleteResult> {
    return this.releaseRepository.delete(id) 
  }
}