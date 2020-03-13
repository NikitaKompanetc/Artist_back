import { Module } from '@nestjs/common' 
import { TypeOrmModule } from '@nestjs/typeorm' 
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersService } from '../users/users.service'
import { TokensService } from '../users/tokens.service'
import { UsersModule } from '../users/users.module'

@Module({
  imports: [
    TypeOrmModule.forFeature(),
    UsersModule
  ],
  exports: [TypeOrmModule],
  providers: [AuthService, TokensService],
  controllers: [AuthController]
})
export class AuthModule {}