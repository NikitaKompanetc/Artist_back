import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Track } from './track.entity' 

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track)
    private readonly trackRepository: Repository<Track>,
  ) { }

  findAll(): Promise<Track[]> {
    return this.trackRepository.find() 
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