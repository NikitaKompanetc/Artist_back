import { Controller, Get, Post, Put, Delete, Body, Param, Query } from  '@nestjs/common' 
import { DeleteResult } from 'typeorm' 
import { GenresService } from './genres.service' 
import { Genre } from './genre.entity' 

@Controller('genres')
export class GenresController {
	constructor(private genresService: GenresService) {}

	@Get()
	getGenres(@Query('autocomplete') autocomplete: string): Promise<Genre[]> {
    return this.genresService.findAll({ autocomplete })
	}
	
	@Get(':id') 
	getGenre(@Param('id') id) {
		return this.genresService.findOne(id)
	}

  @Post()
  createGenre(@Body() genreData: Genre): Promise<Genre> {
    return this.genresService.create(genreData)
  }

  @Put(':id')
  updateGenre(@Param('id') id, @Body() genreData: Genre): Promise<Genre> {
    genreData.id = Number(id)
    return this.genresService.update(genreData)
  }

  @Delete(':id')
  deleteGenre(@Param('id') id): Promise<DeleteResult> {
    return this.genresService.delete(id)
  }
}
