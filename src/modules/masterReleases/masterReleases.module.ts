import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterRelease } from './masterRelease.entity';
import { MasterReleasesService } from './masterReleases.service';
import { MasterReleasesController } from './masterReleases.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([MasterRelease]),
  ],
  exports: [TypeOrmModule],
  providers: [MasterReleasesService],
  controllers: [MasterReleasesController]
})
export class MasterReleasesModule {}