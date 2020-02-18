
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Picture } from 'src/shared/entities/picture.entity';
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity';

@Entity()
export class Track {
	@PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string

  @Column()
  who: string

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