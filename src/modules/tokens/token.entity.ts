import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm' 
import { User } from '../users/user.entity'

@Entity()
export class Token {
  // determines which token is valid
  @Column()
  tokenId: string

  // determines which browser is used
  @PrimaryColumn()
  browserId: string

  // determines only when token expires and can be deleted
  @Column()
  expiresAt: number

  // determines which user is owner of the token
  @ManyToOne(type => User, user => user.tokenList, {
		onDelete: "CASCADE",
    onUpdate: "CASCADE",
    eager: true
	})
  user: User
}