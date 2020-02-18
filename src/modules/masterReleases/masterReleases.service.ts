import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult } from  'typeorm';
import { MasterRelease } from './masterRelease.entity';

@Injectable()
export class MasterReleasesService {
  constructor(
    @InjectRepository(MasterRelease)
    private readonly masterReleaseRepository: Repository<MasterRelease>
  ) { }

  findAll(): Promise<MasterRelease[]> {
    return this.masterReleaseRepository.find();
  }

  findOne(id): Promise<MasterRelease> {
    return this.masterReleaseRepository.findOne(id)
  }

  create(masterRelease: MasterRelease): Promise<MasterRelease> {
    return this.masterReleaseRepository.save(masterRelease)
  }

  update(masterRelease: MasterRelease): Promise<MasterRelease> {
    return this.masterReleaseRepository.save(masterRelease)
  }

  delete(id): Promise<DeleteResult> {
    return this.masterReleaseRepository.delete(id)
  }
}