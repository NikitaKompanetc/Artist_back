import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { MasterRelease } from './masterRelease.entity' 

@Injectable()
export class MasterReleasesService {
  constructor(
    @InjectRepository(MasterRelease)
    private readonly masterReleaseRepository: Repository<MasterRelease>
  ) { }

  async findAll(query): Promise<{ items: MasterRelease[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [items, totalCount] = await this.masterReleaseRepository.findAndCount(options)
    return { items, totalCount }
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