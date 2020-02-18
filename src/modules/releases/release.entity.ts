
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';
import { Link } from 'src/shared/entities/link.entity';
import { Format } from 'src/shared/entities/format.entity';
import { Style } from 'src/shared/entities/style.entity';
import { Genre } from 'src/shared/entities/genre.entity';
import { Picture } from 'src/shared/entities/picture.entity';
import { Location } from 'src/shared/entities/location.entity';
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity';
import { Label } from 'src/modules/label/label.entity';
import { Track } from '../tracks/track.entity';
import { MasterRelease } from '../masterRelease/masterRelease.entity';

@Entity()
export class Release {
	@PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string;

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

  @OneToMany(type => Picture, picture => picture.release, {
    cascade: true,
    eager: true,
  })
  pictureList: Picture[]

  @Column({ nullable: true })
	publishedAt: string

  @ManyToOne(type => Label, {
    eager: true,
  })
  label: Label

  @ManyToMany(type => Track, {
    eager: true,
  })
  @JoinTable()
  trackList: Track[]

  @ManyToMany(type => Format, {
    eager: true,
  })
  @JoinTable()
  formatList: Format[]

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

  @OneToMany(type => Link, link => link.release, {
    cascade: true,
    eager: true,
  })
  linkList: Link[]

  @ManyToOne(type => MasterRelease, masterRelease => masterRelease.releaseList, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  masterRelease: MasterRelease
}