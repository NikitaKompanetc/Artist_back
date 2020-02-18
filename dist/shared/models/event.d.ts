import { Location } from './location';
import { Venue } from './venue';
export interface Artist {
    name: string;
}
export interface Event {
    id: number;
    name: string;
    description?: string;
    linkList?: Array<{
        name: string;
        url: string;
    }>;
    profilePicture?: {
        url: string;
    };
    pictureList?: Array<{
        url: string;
        name?: string;
    }>;
    location?: Location;
    venue?: Venue;
}
