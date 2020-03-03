import { Location } from './location' 

export interface Record {
  name: string,
  who: string,
  year: number
}

export interface Label {
  name: string,
  profile: string,
  // profilePisture
  // pictureList
  location: Location
  websites: string[],
  id: number,
}