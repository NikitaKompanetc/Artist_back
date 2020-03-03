import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm' 

@Entity()
export class ProfilePicture {
	@PrimaryGeneratedColumn()
	id: number

  @Column()
  url: string
}