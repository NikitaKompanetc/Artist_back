import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Artist } from 'src/modules/artists/artist.entity';
import { Release } from 'src/modules/releases/release.entity';
import { Label } from '../../modules/label/label.entity';
import { Venue } from 'src/modules/venues/venue.entity';

@Entity()
export class Link {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
  url: string
  
  @ManyToOne(type => Artist, artist => artist.linkList, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  artist: Artist

  @ManyToOne(type => Release, release => release.linkList, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  release: Release

  @ManyToOne(type => Label, label => label.linkList, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  label: Label

  @ManyToOne(type => Venue, venue => venue.linkList, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  venue: Venue
}