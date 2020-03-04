import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne, ManyToMany, JoinTable } from 'typeorm' 
import { Link } from 'src/shared/entities/link.entity' 
import { Location } from 'src/shared/entities/location.entity' 
import { ArtistType } from 'src/shared/models/artist' 
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity' 
import { Picture } from 'src/shared/entities/picture.entity' 
import { Style } from '../styles/style.entity' 
import { Genre } from '../genres/genre.entity' 
import { Track } from '../tracks/track.entity'

@Entity()
export class Artist {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	date: string

	@Column()
	description: string

  @Column({ nullable: true })
  type: ArtistType

  @OneToOne(type => Location, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  location: Location

  @OneToOne(type => ProfilePicture, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  profilePicture: ProfilePicture

  @OneToMany(type => Picture, picture => picture.artist, {
    cascade: true,
    eager: true,
  })
  pictureList: Picture[]

  @Column("integer", { array: true, nullable: true })
  memberList: Array<number | Artist>

  @Column("integer", { array: true, nullable: true })
  memberOf: Array<number | Artist>

  @ManyToMany(type => Genre, {
    eager: true,
  })
  @JoinTable()
  genreList: Genre[]

  @ManyToMany(type => Style, {
    eager: true,
  })
  @JoinTable()
  styleList: Style[]

	@OneToMany(type => Link, link => link.artist, {
	 	cascade: true,
		eager: true,
	})
  linkList: Link[]
  
  @OneToMany(type => Track, track => track.who)
  trackList: Track[]
}