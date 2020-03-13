import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne, ManyToMany, JoinTable } from 'typeorm' 
import { Token } from './token.entity'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  role: string

  @OneToMany(type => Token, token => token.user, {
    cascade: true,
  })
  tokenList: Token[]
}