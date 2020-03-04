import { Injectable } from '@nestjs/common' 
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository, Like } from 'typeorm' 
import { DeleteResult } from 'typeorm' 
import { Event } from './event.entity' 

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) { }

  async findAll(query): Promise<{ events: Event[] , totalCount: number }> {
    const options: any = {
      take: query.take,
      skip: query.skip
    };
    if (query.autocomplete) {
      options.where = {
        name: Like(`%${query.autocomplete}%`)
      }
    }
    const [events, totalCount] = await this.eventRepository.findAndCount(options);
    return { events, totalCount }
  }

  findOne(id): Promise<Event> {
    return this.eventRepository.findOne(id) 
  }

  create(event: Event): Promise<Event> {
    return this.eventRepository.save(event) 
  }

  update(event: Event): Promise<Event> {
    return this.eventRepository.save(event) 
  }

  delete(id): Promise<DeleteResult> {
    return this.eventRepository.delete(id) 
  }
}