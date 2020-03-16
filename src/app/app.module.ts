import { GenresModule } from './../modules/genres/genres.module' 
import { TracksModule } from './../modules/tracks/tracks.module' 
import { Module } from '@nestjs/common' 
import { CoreModule } from '../core/core.module' 
import { TypeOrmModule } from './type-orm/type.orm.module' 
import { ConfigModule } from './config/config.module' 
import { ArtistsModule } from '../modules/artists/artists.module' 
import { ReleasesModule } from 'src/modules/releases/releases.module' 
import { LabelsModule } from 'src/modules/labels/labels.module' 
import { MasterReleasesModule } from 'src/modules/masterReleases/masterReleases.module' 
import { VenuesModule } from 'src/modules/venues/venues.module' 
import { EventsModule } from 'src/modules/events/events.module' 
import { StylesModule } from 'src/modules/styles/styles.module' 
import { FormatsModule } from 'src/modules/formats/formats.module' 
import { UsersModule } from 'src/modules/users/users.module'
import { AuthModule } from 'src/modules/auth/auth.module'
import { TokensModule } from 'src/modules/tokens/tokens.module'

const modules = [
  TypeOrmModule,
  ConfigModule,
  CoreModule,
  ArtistsModule,
  ReleasesModule,
  LabelsModule,
  TracksModule,
  MasterReleasesModule,
  VenuesModule,
  EventsModule,
  StylesModule,
  GenresModule,
  FormatsModule,
  UsersModule,
  AuthModule,
  TokensModule
]

@Module({
	imports: modules
})
export class AppModule {
}
