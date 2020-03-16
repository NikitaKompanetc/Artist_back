import { Module, MiddlewareConsumer } from '@nestjs/common' 
import { TypeOrmModule } from '@nestjs/typeorm' 
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from '../users/users.module'
import { TokensModule } from '../tokens/tokens.module'
import { UsersService } from '../users/users.service'
import { TokensService } from '../tokens/tokens.service'

@Module({
  imports: [
    TypeOrmModule.forFeature(),
    UsersModule,
    TokensModule
  ],
  exports: [TypeOrmModule],
  providers: [AuthService, UsersService, TokensService],
  controllers: [AuthController]
})
export class AuthModule { }