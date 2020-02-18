import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
import { DeleteResult } from  'typeorm';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>
  ) { }

  findAll(): Promise<Artist[]> {
    return this.artistRepository.find();
  }

  findOne(id): Promise<Artist> {
    return this.artistRepository.findOne(id);
  }

  create(artist: Artist): Promise<Artist> {
    return this.artistRepository.save(artist);
  }

  update(artist: Artist): Promise<Artist> {
    return this.artistRepository.save(artist);
  }

  delete(id): Promise<DeleteResult> {
    return this.artistRepository.delete(id);
  }
}