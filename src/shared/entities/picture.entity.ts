import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Picture {
	@PrimaryGeneratedColumn()
	id: number

  @Column()
  url: string

  @Column()
  name: string
}