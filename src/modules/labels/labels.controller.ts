import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { LabelsService } from './labels.service';
import { Label } from './label.entity';

@Controller('labels')
export class LabelsController {
	constructor(private labelsService: LabelsService) {}

	@Get()
	getLabels(): Promise<Label[]> {
    return this.labelsService.findAll();
	}
	
	@Get(':id') 
	getLabel(@Param('id') id) {
		return this.labelsService.findOne(id);
	}

  @Post()
  createLabel(@Body() labelData: Label): Promise<Label> {
    return this.labelsService.create(labelData);
  }

  @Put(':id')
  updateLabel(@Param('id') id, @Body() labelData: Label): Promise<Label> {
    labelData.id = Number(id);
    return this.labelsService.update(labelData);
  }

  @Delete(':id')
  deleteLabel(@Param('id') id): Promise<DeleteResult> {
    return this.labelsService.delete(id);
  }
}
