import { Format } from "./format";
import { Genre } from "./genre";
import { Style } from "./style";
import { Location } from "./location";
interface Label {
    id: string;
    name: string;
}
interface Track {
    id: string;
    name: string;
}
export interface Release {
    publishedAt?: Date;
    id: number;
    profilePicture?: {
        url: string;
    };
    pictureList?: Array<{
        url: string;
        name?: string;
    }>;
    name: string;
    label?: Label;
    formatList?: Format[];
    location?: Location;
    description?: string;
    linkList?: Array<{
        name: string;
        url: string;
    }>;
    genreList?: Genre[];
    styleList?: Style[];
    trackList?: Track[];
}
export {};
