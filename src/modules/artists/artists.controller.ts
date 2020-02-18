import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { ArtistsService } from './artists.service';
import { DeleteResult } from 'typeorm';
import { Artist } from './artist.entity';

@Controller('artists')
export class ArtistsController {
	constructor(private artistsService: ArtistsService) {}

	@Get()
	getArtists(): Promise<Artist[]> {
    return this.artistsService.findAll();
	}
	
	@Get(':id') 
	getArtist(@Param('id') id) {
		return this.artistsService.findOne(id);
	}

  @Post()
  createArtist(@Body() atistData: Artist): Promise<Artist> {
    return this.artistsService.create(atistData);
  }

  @Put(':id')
  updateArtist(@Param('id') id, @Body() atistData: Artist): Promise<Artist> {
    atistData.id = Number(id);
    return this.artistsService.update(atistData);
  }

  @Delete(':id')
  deleteArtist(@Param('id') id): Promise<DeleteResult> {
    return this.artistsService.delete(id);
  }
}
