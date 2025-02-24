import { Controller, Get, Post, Put, Delete, Body, Param, Query } from  '@nestjs/common' 
import { DeleteResult } from 'typeorm' 
import { ReleasesService } from './releases.service' 
import { Release } from './release.entity' 

@Controller('releases')
export class ReleasesController {
	constructor(private releasesService: ReleasesService) {}

	@Get()
	getReleases(@Query() query): Promise<{ items: Release[] , totalCount: number }> {
    return this.releasesService.findAll(query) 
	}
	
	@Get(':id') 
	getRelease(@Param('id') id) {
		return this.releasesService.findOne(id) 
	}

  @Post()
  createRelease(@Body() releaseData: Release): Promise<Release> {
    return this.releasesService.create(releaseData) 
  }

  @Put(':id')
  updateRelease(@Param('id') id, @Body() releaseData: Release): Promise<Release> {
    releaseData.id = Number(id) 
    return this.releasesService.update(releaseData) 
  }

  @Delete(':id')
  deleteRelease(@Param('id') id): Promise<DeleteResult> {
    return this.releasesService.delete(id) 
  }
}
