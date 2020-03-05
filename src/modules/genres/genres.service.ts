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

  async findAll(query): Promise<{ genres: Genre[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [genres, totalCount] = await this.genreRepository.findAndCount(options)
    return { genres, totalCount }
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