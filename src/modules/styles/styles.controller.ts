import { Controller, Get, Post, Put, Delete, Body, Param, Query } from  '@nestjs/common' 
import { DeleteResult } from 'typeorm' 
import { Style } from './style.entity'
import { StylesService } from './styles.service'

@Controller('styles')
export class StylesController {
	constructor(private stylesService: StylesService) {}

	@Get()
	getStyles(@Query() query): Promise<{ items: Style[] , totalCount: number }> {
    return this.stylesService.findAll(query)
  }
	
	@Get(':id') 
	getStyle(@Param('id') id) {
		return this.stylesService.findOne(id)
	}

  @Post()
  createStyle(@Body() styleData: Style): Promise<Style> {
    return this.stylesService.create(styleData)
  }

  @Put(':id')
  updateStyle(@Param('id') id, @Body() styleData: Style): Promise<Style> {
    styleData.id = Number(id)
    return this.stylesService.update(styleData)
  }

  @Delete(':id')
  deleteStyle(@Param('id') id): Promise<DeleteResult> {
    return this.stylesService.delete(id)
  }
}
