import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common' 
import { DeleteResult } from 'typeorm' 
import { Track } from './track.entity' 
import { TracksService } from './tracks.service' 

@Controller('tracks')
export class TracksController {
	constructor(private tracksService: TracksService) {}

	@Get()
	getTracks(): Promise<Track[]> {
    return this.tracksService.findAll() 
	}
	
	@Get(':id') 
	getTrack(@Param('id') id) {
		return this.tracksService.findOne(id) 
	}

  @Post()
  createTrack(@Body() trackData: Track): Promise<Track> {
    return this.tracksService.create(trackData) 
  }

  @Put(':id')
  updateTrack(@Param('id') id, @Body() trackData: Track): Promise<Track> {
    trackData.id = Number(id) 
    return this.tracksService.update(trackData) 
  }

  @Delete(':id')
  deleteTrack(@Param('id') id): Promise<DeleteResult> {
    return this.tracksService.delete(id) 
  }
}
