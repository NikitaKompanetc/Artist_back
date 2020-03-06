import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Track } from './track.entity' 

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track)
    private readonly trackRepository: Repository<Track>,
  ) { }

  async findAll(query): Promise<{ items: Track[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [items, totalCount] = await this.trackRepository.findAndCount(options)
    return { items, totalCount }
  }

  findOne(id): Promise<Track> {
    return this.trackRepository.findOne(id) 
  }

  create(track: Track): Promise<Track> {
    return this.trackRepository.save(track) 
  }

  update(track: Track): Promise<Track> {
    return this.trackRepository.save(track) 
  }

  delete(id): Promise<DeleteResult> {
    return this.trackRepository.delete(id) 
  }
}