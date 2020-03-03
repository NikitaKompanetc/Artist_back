import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Genre } from './genre.entity' 

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>
  ) { }

  findAll({ autocomplete }): Promise<Genre[]> {
    const options: any = {};
    if (autocomplete) {
      options.where = {
        name: Like(`%${autocomplete}%`)
      }
    }
    return this.genreRepository.find(options)
  }

  findOne(id): Promise<Genre> {
    return this.genreRepository.findOne(id)
  }

  create(genre: Genre): Promise<Genre> {
    return this.genreRepository.save(genre)
  }

  update(genre: Genre): Promise<Genre> {
    return this.genreRepository.save(genre)
  }

  delete(id): Promise<DeleteResult> {
    return this.genreRepository.delete(id)
  }
}