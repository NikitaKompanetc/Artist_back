import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { TypeOrmModule } from './type-orm/type.orm.module';
import { ConfigModule } from './config/config.module';
import { ArtistsController } from '../modules/artists/artists.controller';
import { ArtistsService } from '../modules/artists/artists.service';
import { ArtistsModule } from '../modules/artists/artists.module';
import { ReleasesModule } from 'src/modules/releases/releases.module';

const modules = [
  TypeOrmModule,
  ConfigModule,
  CoreModule,
  ArtistsModule,
  ReleasesModule
];

@Module({
	imports: modules
})
export class AppModule {
}
