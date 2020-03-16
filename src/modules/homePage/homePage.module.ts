import { LabelsModule } from 'src/modules/labels/labels.module';

import { Module } from '@nestjs/common' 
import { TypeOrmModule } from '@nestjs/typeorm' 
import { HomePageService } from './homepage.service'
import { HomePageController } from './homepage.controller'
import { ArtistsModule } from '../artists/artists.module'
import { ArtistsService } from '../artists/artists.service'
import { EventsModule } from '../events/events.module'
import { EventsService } from '../events/events.service'
import { VenuesModule } from '../venues/venues.module'
import { VenuesService } from '../venues/venues.service'
import { LabelsService } from '../labels/labels.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(),
    ArtistsModule,
    EventsModule,
    VenuesModule,
    LabelsModule
  ],
  exports: [TypeOrmModule],
  providers: [HomePageService, ArtistsService, EventsService, VenuesService, LabelsService],
  controllers: [HomePageController]
})
export class HomePageModule {}