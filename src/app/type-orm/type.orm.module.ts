import { Module } from '@nestjs/common' 
import * as path from 'path' 
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm' 

const modules = [
  NestTypeOrmModule.forRoot({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    synchronize: true,
    username: "postgres",
    password: "admin",
    database: "artistsdb",
    entities: [__dirname + '../../../**/*.entity.{ts,js}', __dirname + '../../../shared/entities/*.entity.{ts,js}']
  })
] 

@Module({
  imports: modules,
  exports: modules,
})
export class TypeOrmModule {
}
