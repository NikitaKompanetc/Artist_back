import { Module } from '@nestjs/common' 
import { TypeOrmModule } from '@nestjs/typeorm' 
import { Style } from './style.entity' 
import { StylesService } from './styles.service' 
import { StylesController } from './styles.controller' 

@Module({
  imports: [
    TypeOrmModule.forFeature([Style]),
  ],
  exports: [TypeOrmModule],
  providers: [StylesService],
  controllers: [StylesController]
})
export class StylesModule {}