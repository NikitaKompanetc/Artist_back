import { Module } from '@nestjs/common' 
import { TypeOrmModule } from '@nestjs/typeorm' 
import { TokensService } from './tokens.service'
import { Token } from './token.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
  ],
  exports: [TypeOrmModule],
  providers: [TokensService],
  controllers: []
})
export class TokensModule {}