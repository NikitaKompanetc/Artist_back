
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm' 
import { Picture } from 'src/shared/entities/picture.entity' 
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity' 
import { Artist } from '../artists/artist.entity'

@Entity()
export class Track {
	@PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string

  @ManyToOne(type => Artist, venue => venue.trackList, {
    nullable: true,
    eager: true,
    onDelete: "SET NULL",
    onUpdate: "SET NULL"
  })
  who: Artist

  @Column()
  year: number

  @OneToOne(type => ProfilePicture, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  profilePicture: ProfilePicture

  @OneToMany(type => Picture, picture => picture.track, {
    cascade: true,
    eager: true,
  })
  pictureList: Picture[]
}