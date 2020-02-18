import { ArtistsService } from './artists.service';
import { DeleteResult } from 'typeorm';
import { Artist } from './artist.entity';
export declare class ArtistsController {
    private artistsService;
    constructor(artistsService: ArtistsService);
    getArtists(): Promise<Artist[]>;
    getArtist(id: any): any;
    createArtist(atistData: Artist): Promise<Artist>;
    update(id: any, atistData: Artist): Promise<Artist>;
    delete(id: any): Promise<DeleteResult>;
}
