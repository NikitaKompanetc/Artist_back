"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const artist_entity_1 = require("./artist.entity");
let ArtistsService = class ArtistsService {
    constructor(artistRepository) {
        this.artistRepository = artistRepository;
    }
    findAll() {
        return this.artistRepository.find();
    }
    async findOne(id) {
        const artist = await this.artistRepository.findOne(id);
        if (artist) {
            artist.memberList = await this.fetchMembers(artist.memberList);
            artist.memberOf = await this.fetchMembers(artist.memberOf);
        }
        return artist;
    }
    async fetchMembers(idList) {
        if (idList) {
            const members = [];
            for (let id of idList) {
                const currentArtist = await this.artistRepository.findOne(id);
                if (currentArtist) {
                    members.push(currentArtist);
                }
            }
            return members;
        }
    }
    create(artist) {
        return this.artistRepository.save(artist);
    }
    update(artist) {
        return this.artistRepository.save(artist);
    }
    delete(id) {
        return this.artistRepository.delete(id);
    }
};
ArtistsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(artist_entity_1.Artist)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArtistsService);
exports.ArtistsService = ArtistsService;
//# sourceMappingURL=artists.service.js.map