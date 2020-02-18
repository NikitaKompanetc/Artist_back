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
const artists_service_1 = require("./artists.service");
const artist_entity_1 = require("./artist.entity");
let ArtistsController = class ArtistsController {
    constructor(artistsService) {
        this.artistsService = artistsService;
    }
    getArtists() {
        return this.artistsService.findAll();
    }
    getArtist(id) {
        return this.artistsService.findOne(id);
    }
    createArtist(atistData) {
        return this.artistsService.create(atistData);
    }
    updateArtist(id, atistData) {
        atistData.id = Number(id);
        return this.artistsService.update(atistData);
    }
    deleteArtist(id) {
        return this.artistsService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "getArtists", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArtistsController.prototype, "getArtist", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [artist_entity_1.Artist]),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "createArtist", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, artist_entity_1.Artist]),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "updateArtist", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "deleteArtist", null);
ArtistsController = __decorate([
    common_1.Controller('artists'),
    __metadata("design:paramtypes", [artists_service_1.ArtistsService])
], ArtistsController);
exports.ArtistsController = ArtistsController;
//# sourceMappingURL=artists.controller.js.map