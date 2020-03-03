import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm' 
import { Link } from 'src/shared/entities/link.entity' 
import { Picture } from 'src/shared/entities/picture.entity' 
import { Location } from 'src/shared/entities/location.entity' 
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity' 
import { Venue } from '../venues/venue.entity' 

@Entity()
export class Event {
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

  @OneToMany(type => Picture, picture => picture.event, {
    cascade: true,
    eager: true,
  })
  pictureList: Picture[]

  @OneToMany(type => Link, link => link.event, {
    cascade: true,
    eager: true,
  })
  linkList: Link[]

  @ManyToOne(type => Venue, venue => venue.eventList, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  venue: Venue
}