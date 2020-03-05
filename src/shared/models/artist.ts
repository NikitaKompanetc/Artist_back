import { Genre } from "./genre" 
import { Style } from "./style" 

export enum ArtistType {
  ARTIST = 'artist'
}

// export interface Record {
//   name: string,
//   who: string,
//   year: number
// }

export interface Artist {
  name: string
  date: string
  //members: number
  description: string
  //discography: Record[]
  id: number
  type: ArtistType
  location?: Location
  profilePicture?: { url: string  }
  pictureList?: Array<{ 
    url: string 
    name?: string  
  }>
  memberList?: Artist[]
  memberOf?: Artist[]
  genreList?: Genre[]
  styleList?: Style[]
  linkList: Array<{ 
    name: string 
    url: string 
  }>
}
