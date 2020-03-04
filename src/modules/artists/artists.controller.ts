import { Controller, Get, Post, Put, Delete, Body, Param, Query } from  '@nestjs/common' 
import { ArtistsService } from './artists.service' 
import { DeleteResult } from 'typeorm' 
import { Artist } from './artist.entity' 

@Controller('artists')
export class ArtistsController {
	constructor(private artistsService: ArtistsService) {}

	@Get()
	getArtists(@Query() query): Promise<{ artists: Artist[] , totalCount: number }> {
    return this.artistsService.findAll(query) 
	}
	
	@Get(':id') 
	getArtist(@Param('id') id) {
		return this.artistsService.findOne(id) 
	}

  @Post()
  createArtist(@Body() artistData: Artist): Promise<Artist> {
    return this.artistsService.create(artistData) 
  }

  @Put(':id')
  updateArtist(@Param('id') id, @Body() artistData: Artist): Promise<Artist> {
    artistData.id = Number(id) 
    return this.artistsService.update(artistData) 
  }

  @Delete(':id')
  deleteArtist(@Param('id') id): Promise<DeleteResult> {
    return this.artistsService.delete(id) 
  }
}
