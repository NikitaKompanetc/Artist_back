import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Release } from './release.entity' 

@Injectable()
export class ReleasesService {
  constructor(
    @InjectRepository(Release)
    private readonly releaseRepository: Repository<Release>,
  ) { }

  async findAll(query): Promise<{ items: Release[] , totalCount: number }> {
    const options: any = {
      relations: ['trackList'],
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [items, totalCount] = await this.releaseRepository.findAndCount(options)
    return { items, totalCount }
  }

  findOne(id): Promise<Release> {
    return this.releaseRepository.findOne(id, {
      relations: ['trackList']
    }) 
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