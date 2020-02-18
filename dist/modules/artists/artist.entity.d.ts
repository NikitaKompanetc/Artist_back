import { Link } from 'src/shared/entities/link.entity';
import { Location } from 'src/shared/entities/location.entity';
import { ArtistType } from 'src/shared/models/artist';
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity';
import { Picture } from 'src/shared/entities/picture.entity';
import { Genre } from 'src/shared/entities/genre.entity';
import { Style } from 'src/shared/entities/style.entity';
export declare class Artist {
    id: number;
    name: string;
    date: string;
    description: string;
    type: ArtistType;
    location: Location;
    profilePicture: ProfilePicture;
    pictureList: Picture[];
    memberList: Array<number | Artist>;
    memberOf: Array<number | Artist>;
    genreList: Genre[];
    styleList: Style[];
    linkList: Link[];
}
