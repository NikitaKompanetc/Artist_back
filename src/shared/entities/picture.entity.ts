import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm' 
import { Artist } from 'src/modules/artists/artist.entity' 
import { Release } from 'src/modules/releases/release.entity' 
import { Label } from 'src/modules/labels/label.entity' 
import { Track } from 'src/modules/tracks/track.entity' 
import { Venue } from 'src/modules/venues/venue.entity' 
import { Event } from 'src/modules/events/event.entity' 

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
  
  @ManyToOne(type => Track, track => track.pictureList, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE"
	})
  track: Track
  
  @ManyToOne(type => Venue, venue => venue.pictureList, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE"
	})
  venue: Venue
  
  @ManyToOne(type => Event, event => event.pictureList, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE"
	})
	event: Event
}