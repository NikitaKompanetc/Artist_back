import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Style {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string
}