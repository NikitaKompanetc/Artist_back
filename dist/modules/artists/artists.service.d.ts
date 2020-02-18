import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
import { DeleteResult } from 'typeorm';
export declare class ArtistsService {
    private readonly artistRepository;
    constructor(artistRepository: Repository<Artist>);
    findAll(): Promise<Artist[]>;
    findOne(id: any): Promise<Artist>;
    fetchMembers(idList: any): Promise<any[]>;
    create(artist: Artist): Promise<Artist>;
    update(artist: Artist): Promise<Artist>;
    delete(id: any): Promise<DeleteResult>;
}
