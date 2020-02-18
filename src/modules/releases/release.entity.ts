
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { Link } from 'src/shared/entities/link.entity';
import { Format } from 'src/shared/entities/format.entity';
import { Style } from 'src/shared/entities/style.entity';
import { Genre } from 'src/shared/entities/genre.entity';
import { Picture } from 'src/shared/entities/picture.entity';
import { Location } from 'src/shared/entities/location.entity';
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity';

@Entity()
export class Release {
	@PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string;

  @Column()
  description: string;

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

  @ManyToMany(type => Picture, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  pictureList: Picture[]

	@Column()
	publishedAt: string


  // label?: Label;
  // trackList?: Track[];
  

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

  @ManyToMany(type => Link, {
    cascade: true,
   eager: true,
  })
  @JoinTable()
  linkList: Link[]
}