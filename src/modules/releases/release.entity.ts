
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Link } from 'src/shared/entities/link.entity';
import { ArtistType } from 'src/shared/models/artist';

@Entity()
export class Release {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	// @Column()
	// date: string

	// @Column()
	// description: string

	// @Column()
	// type: ArtistType

	// @Column()
	// location: Location

	// @Column()
	// profilePicture: { url: string; }

	// @Column()
	// pictureList: Array<{ url: string; name?: string; }>

	// @Column()
	// memberList: Artist[]

	// @Column()
	// memberOf: Artist[]

	// @Column()
	// genreList: Genre[]

	// @Column()
	// styleList: Style[]

	@ManyToMany(type => Link, {
	 	cascade: true,
		eager: true,
	})
	@JoinTable()
	linkList: Link[]
}