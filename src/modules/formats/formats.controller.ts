import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common' 
import { DeleteResult } from 'typeorm' 
import { FormatsService } from './formats.service' 
import { Format } from './format.entity' 

@Controller('formats')
export class FormatsController {
	constructor(private formatsService: FormatsService) {}

	@Get()
	getFormats(): Promise<Format[]> {
    return this.formatsService.findAll() 
	}
	
	@Get(':id') 
	getFormat(@Param('id') id) {
		return this.formatsService.findOne(id) 
	}

  @Post()
  createFormat(@Body() formatData: Format): Promise<Format> {
    return this.formatsService.create(formatData) 
  }

  @Put(':id')
  updateFormat(@Param('id') id, @Body() formatData: Format): Promise<Format> {
    formatData.id = Number(id) 
    return this.formatsService.update(formatData) 
  }

  @Delete(':id')
  deleteFormat(@Param('id') id): Promise<DeleteResult> {
    return this.formatsService.delete(id) 
  }
}
