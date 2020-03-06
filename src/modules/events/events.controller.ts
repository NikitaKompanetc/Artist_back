import { Controller, Get, Post, Put, Delete, Body, Param, Query } from  '@nestjs/common' 
import { DeleteResult } from 'typeorm' 
import { Event } from './event.entity' 
import { EventsService } from './events.service' 

@Controller('events')
export class EventsController {
	constructor(private eventsService: EventsService) {}

	@Get()
	getEvents(@Query() query): Promise<{ items: Event[] , totalCount: number }> {
    return this.eventsService.findAll(query) 
	}
	
	@Get(':id') 
	getEvent(@Param('id') id) {
		return this.eventsService.findOne(id) 
	}

  @Post()
  createEvent(@Body() eventData: Event): Promise<Event> {
    return this.eventsService.create(eventData) 
  }

  @Put(':id')
  updateEvent(@Param('id') id, @Body() eventData: Event): Promise<Event> {
    eventData.id = Number(id) 
    return this.eventsService.update(eventData) 
  }

  @Delete(':id')
  deleteEvent(@Param('id') id): Promise<DeleteResult> {
    return this.eventsService.delete(id) 
  }
}
