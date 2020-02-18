import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Artist } from 'src/modules/artists/artist.entity';
import { Release } from 'src/modules/releases/release.entity';
import { Label } from 'src/modules/label/label.entity';

@Entity()
export class Picture {
	@PrimaryGeneratedColumn()
	id: number

  @Column()
  url: string

  @Column()
  name: string

  @ManyToOne(type => Artist, artist => artist.pictureList, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE"
	})
  artist: Artist
  
  @ManyToOne(type => Release, release => release.pictureList, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE"
	})
  release: Release
  
  @ManyToOne(type => Label, label => label.pictureList, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE"
	})
	label: Label
}