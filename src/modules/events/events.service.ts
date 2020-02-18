import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) { }

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  findOne(id): Promise<Event> {
    return this.eventRepository.findOne(id);
  }

  create(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }

  update(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }

  delete(id): Promise<DeleteResult> {
    return this.eventRepository.delete(id);
  }
}