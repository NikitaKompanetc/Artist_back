import { Module } from '@nestjs/common' 
import { TypeOrmModule } from '@nestjs/typeorm' 
import { UsersService } from '../users/users.service'
import { User } from './user.entity'
import { TokensService } from './tokens.service'
import { Token } from './token.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Token]),
  ],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService, TokensService],
  controllers: []
})
export class UsersModule {}