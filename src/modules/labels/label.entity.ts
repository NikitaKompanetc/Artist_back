import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm' 
import { ProfilePicture } from '../../shared/entities/profile-picture.entity' 
import { Picture } from '../../shared/entities/picture.entity' 
import { Location } from '../../shared/entities/location.entity' 
import { Link } from '../../shared/entities/link.entity' 

@Entity()
export class Label {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
  name: string
  
  @Column()
  profile: string

  @OneToOne(type => ProfilePicture, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  profilePicture: ProfilePicture

  @OneToMany(type => Picture, picture => picture.label, {
    cascade: true,
    eager: true,
  })
  pictureList: Picture[]

  @OneToOne(type => Location, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  location: Location

  @OneToMany(type => Link, link => link.label, {
    cascade: true,
    eager: true,
  })
  linkList: Link[]
}