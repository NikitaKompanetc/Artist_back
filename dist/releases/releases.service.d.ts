import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm';
import { Release } from './release.entity';
export declare class ReleasesService {
    private readonly artistRepository;
    constructor(artistRepository: Repository<Release>);
    findAll(): Promise<Release[]>;
    findOne(id: any): Promise<Release>;
    create(artist: Release): Promise<Release>;
    update(artist: Release): Promise<Release>;
    delete(id: any): Promise<DeleteResult>;
}
