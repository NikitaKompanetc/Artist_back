import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm' 
import { Release } from '../releases/release.entity' 

@Entity()
export class MasterRelease {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	date: string

	@Column()
	description: string

  @OneToMany(type => Release, release => release.masterRelease, {
    eager: true,
  })
  releaseList: Release[]
}