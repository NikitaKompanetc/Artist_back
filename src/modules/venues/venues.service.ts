import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from  'typeorm' 
import { Venue } from './venue.entity' 

@Injectable()
export class VenuesService {
  constructor(
    @InjectRepository(Venue)
    private readonly venueRepository: Repository<Venue>,
  ) { }

  async findAll(query): Promise<{ venues: Venue[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    }
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [venues, totalCount] = await this.venueRepository.findAndCount(options)
    return { venues, totalCount }
  }

  findOne(id): Promise<Venue> {
    return this.venueRepository.findOne(id) 
  }

  create(venue: Venue): Promise<Venue> {
    return this.venueRepository.save(venue) 
  }

  update(venue: Venue): Promise<Venue> {
    return this.venueRepository.save(venue) 
  }

  delete(id): Promise<DeleteResult> {
    return this.venueRepository.delete(id) 
  }
}