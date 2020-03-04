import { Controller, Get, Post, Put, Delete, Body, Param, Query } from  '@nestjs/common' 
import { DeleteResult } from 'typeorm' 
import { VenuesService } from './venues.service' 
import { Venue } from './venue.entity' 

@Controller('venues')
export class VenuesController {
	constructor(private venuesService: VenuesService) {}

	@Get()
	getVenues(@Query() query): Promise<{ venues: Venue[] , totalCount: number }> {
    return this.venuesService.findAll(query) 
	}
	
	@Get(':id') 
	getVenue(@Param('id') id) {
		return this.venuesService.findOne(id) 
	}

  @Post()
  createVenue(@Body() venueData: Venue): Promise<Venue> {
    return this.venuesService.create(venueData) 
  }

  @Put(':id')
  updateVenue(@Param('id') id, @Body() venueData: Venue): Promise<Venue> {
    venueData.id = Number(id) 
    return this.venuesService.update(venueData) 
  }

  @Delete(':id')
  deleteVenue(@Param('id') id): Promise<DeleteResult> {
    return this.venuesService.delete(id) 
  }
}
