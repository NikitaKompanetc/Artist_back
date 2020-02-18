import { ArtistsService } from './artists.service';
import { DeleteResult } from 'typeorm';
import { Artist } from './artist.entity';
export declare class ArtistsController {
    private artistsService;
    constructor(artistsService: ArtistsService);
    getArtists(): Promise<Artist[]>;
    getArtist(id: any): Promise<Artist>;
    createArtist(atistData: Artist): Promise<Artist>;
    updateArtist(id: any, atistData: Artist): Promise<Artist>;
    deleteArtist(id: any): Promise<DeleteResult>;
}
