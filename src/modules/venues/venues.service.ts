import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult } from  'typeorm';
import { Venue } from './venue.entity';

@Injectable()
export class VenuesService {
  constructor(
    @InjectRepository(Venue)
    private readonly venueRepository: Repository<Venue>,
  ) { }

  findAll(): Promise<Venue[]> {
    return this.venueRepository.find();
  }

  findOne(id): Promise<Venue> {
    return this.venueRepository.findOne(id);
  }

  create(venue: Venue): Promise<Venue> {
    return this.venueRepository.save(venue);
  }

  update(venue: Venue): Promise<Venue> {
    return this.venueRepository.save(venue);
  }

  delete(id): Promise<DeleteResult> {
    return this.venueRepository.delete(id);
  }
}