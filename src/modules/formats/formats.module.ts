import { Module } from '@nestjs/common' 
import { TypeOrmModule } from '@nestjs/typeorm' 
import { Format } from './format.entity' 
import { FormatsController } from './formats.controller' 
import { FormatsService } from './formats.service' 

@Module({
  imports: [
    TypeOrmModule.forFeature([Format]),
  ],
  exports: [TypeOrmModule],
  providers: [FormatsService],
  controllers: [FormatsController]
})
export class FormatsModule {}