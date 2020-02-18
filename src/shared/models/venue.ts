import { Location } from './location'

export interface Venue {
  id: number
  name: string;

  description?: string;
  linkList?: Array<{ name: string; url: string }>;
  profilePicture?: { url: string; };
  pictureList?: Array<{ url: string; name?: string; }>;
  location?: Location;
}