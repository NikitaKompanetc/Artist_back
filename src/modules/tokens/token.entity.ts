import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm' 
import { User } from '../users/user.entity'

@Entity()
export class Token {
  @ManyToOne(type => User, user => user.tokenList, {
		onDelete: "CASCADE",
    onUpdate: "CASCADE",
    eager: true
	})
  user: User

  @Column()
  expiresAt: number

  @PrimaryColumn()
  refreshTokenId: string
}