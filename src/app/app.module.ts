import { TracksModule } from './../modules/tracks/tracks.module';
import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from './type-orm/type.orm.module';
import { ConfigModule } from './config/config.module';
import { ArtistsModule } from '../modules/artists/artists.module';
import { ReleasesModule } from 'src/modules/releases/releases.module';
import { LabelsModule } from 'src/modules/label/labels.module';
import { MasterReleasesModule } from 'src/modules/masterRelease/masterReleases.module';
import { VenuesModule } from 'src/modules/venues/venues.module';

const modules = [
  TypeOrmModule,
  ConfigModule,
  CoreModule,
  ArtistsModule,
  ReleasesModule,
  LabelsModule,
  TracksModule,
  MasterReleasesModule,
  VenuesModule
];

@Module({
	imports: modules
})
export class AppModule {
}
