import { Genre } from "./genre";
import { Style } from "./style";
export declare enum ArtistType {
    ARTIST = "artist"
}
export interface Artist {
    name: string;
    date: string;
    description: string;
    id: number;
    type: ArtistType;
    location?: Location;
    profilePicture?: {
        url: string;
    };
    pictureList?: Array<{
        url: string;
        name?: string;
    }>;
    memberList?: Artist[];
    memberOf?: Artist[];
    genreList?: Genre[];
    styleList?: Style[];
    linkList: Array<{
        name: string;
        url: string;
    }>;
}
