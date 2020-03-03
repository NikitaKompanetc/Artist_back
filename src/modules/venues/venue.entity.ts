
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm' 
import { Link } from 'src/shared/entities/link.entity' 
import { Picture } from 'src/shared/entities/picture.entity' 
import { Location } from 'src/shared/entities/location.entity' 
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity' 
import { Event } from '../events/event.entity' 

@Entity()
export class Venue {
	@PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string 

  @Column({ nullable: true })
  description: string

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

  @OneToMany(type => Picture, picture => picture.venue, {
    cascade: true,
    eager: true,
  })
  pictureList: Picture[]

  @OneToMany(type => Link, link => link.venue, {
    cascade: true,
    eager: true,
  })
  linkList: Link[]

  @OneToMany(type => Event, event => event.venue, {
    cascade: true
  })
  eventList: Event[]
}