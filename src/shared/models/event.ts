import { Location } from './location'
import { Venue } from './venue';

export interface Artist {
  name: string,
}

// OLD FIELDS

// export interface Event {
//   name: string,
//   imageUrls: string[],
//   country: string,
//   city: string,
//   state: string,
//   street: string,
//   zipcode: number,
//   websites: string[],
//   description: string,
//   artists: Artist[],
//   dateFrom: string,
//   timeFrom: string,
//   dateTo: string,
//   timeTo: string,
//   id: number,
// }

export interface Event {
  id: number; 
  name: string;
  
  description?: string;
  linkList?: Array<{ name: string; url: string }>;
  profilePicture?: { url: string; };
  pictureList?: Array<{ url: string; name?: string; }>;
  location?: Location;
  
  venue?: Venue;
}