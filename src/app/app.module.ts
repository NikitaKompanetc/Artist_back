import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from './type-orm/type.orm.module';
import { ConfigModule } from './config/config.module';
import { ArtistsModule } from '../modules/artists/artists.module';
import { ReleasesModule } from 'src/modules/releases/releases.module';
import { LabelsModule } from 'src/modules/label/labels.module';

const modules = [
  TypeOrmModule,
  ConfigModule,
  CoreModule,
  ArtistsModule,
  ReleasesModule,
  LabelsModule
];

@Module({
	imports: modules
})
export class AppModule {
}
