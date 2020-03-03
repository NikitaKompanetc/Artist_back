import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm' 

@Entity()
export class Format {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string
}