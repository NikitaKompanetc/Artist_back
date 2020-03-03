import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common' 
import { DeleteResult } from 'typeorm' 
import { MasterRelease } from './masterRelease.entity' 
import { MasterReleasesService } from './masterReleases.service' 

@Controller('master-releases')
export class MasterReleasesController {
	constructor(private masterReleasesService: MasterReleasesService) {}

	@Get()
	getMasterReleases(): Promise<MasterRelease[]> {
    return this.masterReleasesService.findAll() 
	}
	
	@Get(':id') 
	getMasterRelease(@Param('id') id) {
		return this.masterReleasesService.findOne(id) 
	}

  @Post()
  createMasterRelease(@Body() masterReleaseData: MasterRelease): Promise<MasterRelease> {
    return this.masterReleasesService.create(masterReleaseData) 
  }

  @Put(':id')
  updateMasterRelease(@Param('id') id, @Body() masterReleaseData: MasterRelease): Promise<MasterRelease> {
    masterReleaseData.id = Number(id) 
    return this.masterReleasesService.update(masterReleaseData) 
  }

  @Delete(':id')
  deleteMasterRelease(@Param('id') id): Promise<DeleteResult> {
    return this.masterReleasesService.delete(id) 
  }
}
