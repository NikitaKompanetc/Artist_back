import { Module } from '@nestjs/common' 
import * as path from 'path' 
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm' 

const modules = [
  NestTypeOrmModule.forRoot({
    type: 'postgres',
    host: "ec2-35-168-54-239.compute-1.amazonaws.com",
    port: 5432,
    synchronize: true,
    username: "kjjqcpsnxmeaka",
    password: "0b98afd94f1234c89d1b8188ac9a1d4a1bdd6811b222d3212d520b6a61b53a27",
    database: "d5lj29t5f366v9",
    entities: [__dirname + '../../../**/*.entity.{ts,js}', __dirname + '../../../shared/entities/*.entity.{ts,js}']
  })
] 

@Module({
  imports: modules,
  exports: modules,
})
export class TypeOrmModule {
}
