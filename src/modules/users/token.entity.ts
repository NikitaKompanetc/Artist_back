import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne, ManyToMany, JoinTable, ManyToOne } from 'typeorm' 
import { User } from './user.entity'

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => User, user => user.tokenList, {
		onDelete: "CASCADE",
    onUpdate: "CASCADE",
    eager: true
	})
  user: User

  @Column()
  browserId: string

  @Column()
  refreshTokenId: string
}