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

  async findOne(id): Promise<Artist> {
    const artist = await this.artistRepository.findOne(id)
    if (artist) {
      artist.memberList = await this.fetchMembers(artist.memberList)
      artist.memberOf = await this.fetchMembers(artist.memberOf)
    }

    return artist
  }

  async fetchMembers(idList) {
    if (idList) {
      const members = []
      for (let id of idList) {
        const currentArtist = await this.artistRepository.findOne(id as number)
        if (currentArtist) {
          members.push(currentArtist)
        }
      }
      return members
    }
  }

  create(artist: Artist): Promise<Artist> {
    return this.artistRepository.save(artist)
  }

  update(artist: Artist): Promise<Artist> {
    return this.artistRepository.save(artist)
  }

  delete(id): Promise<DeleteResult> {
    return this.artistRepository.delete(id)
  }
}