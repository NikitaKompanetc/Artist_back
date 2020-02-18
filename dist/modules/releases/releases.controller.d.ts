import { DeleteResult } from 'typeorm';
import { ReleasesService } from './releases.service';
import { Release } from './release.entity';
export declare class ReleasesController {
    private releasesService;
    constructor(releasesService: ReleasesService);
    getReleases(): Promise<Release[]>;
    getRelease(id: any): Promise<Release>;
    createRelease(releaseData: Release): Promise<Release>;
    updateRelease(id: any, releaseData: Release): Promise<Release>;
    deleteRelease(id: any): Promise<DeleteResult>;
}
