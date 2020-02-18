import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
	@PrimaryGeneratedColumn()
	id: number

  @Column({ nullable: true })
  address: string
  
  @Column({ nullable: true })
  city: string

  @Column({ nullable: true })
  zipCode: string

  @Column({ nullable: true })
  country: string

  @Column({ nullable: true })
  longitude: number

  @Column({ nullable: true })
  latitude: number
}