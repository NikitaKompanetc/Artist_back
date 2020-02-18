import { VenuesController } from './venues.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Venue } from './venue.entity';
import { VenuesService } from './venues.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Venue]),
  ],
  exports: [TypeOrmModule],
  providers: [VenuesService],
  controllers: [VenuesController]
})
export class VenuesModule {}