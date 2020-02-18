import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Artist } from 'src/modules/artists/artist.entity';

@Entity()
export class Link {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	url: string
}