import { Link } from 'src/shared/entities/link.entity';
import { Format } from 'src/shared/entities/format.entity';
import { Style } from 'src/shared/entities/style.entity';
import { Genre } from 'src/shared/entities/genre.entity';
import { Picture } from 'src/shared/entities/picture.entity';
import { Location } from 'src/shared/entities/location.entity';
import { ProfilePicture } from 'src/shared/entities/profile-picture.entity';
export declare class Release {
    id: number;
    name: string;
    description: string;
    location: Location;
    profilePicture: ProfilePicture;
    pictureList: Picture[];
    publishedAt: string;
    formatList: Format[];
    genreList: Genre[];
    styleList: Style[];
    linkList: Link[];
}
