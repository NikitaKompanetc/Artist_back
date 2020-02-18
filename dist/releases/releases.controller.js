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
const releases_service_1 = require("./releases.service");
const release_entity_1 = require("./release.entity");
let ReleasesController = class ReleasesController {
    constructor(releasesService) {
        this.releasesService = releasesService;
    }
    getReleases() {
        return this.releasesService.findAll();
    }
    getRelease(id) {
        return this.releasesService.findOne(id);
    }
    createRelease(releaseData) {
        return this.releasesService.create(releaseData);
    }
    updateRelease(id, releaseData) {
        releaseData.id = Number(id);
        return this.releasesService.update(releaseData);
    }
    deleteRelease(id) {
        return this.releasesService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReleasesController.prototype, "getReleases", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReleasesController.prototype, "getRelease", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [release_entity_1.Release]),
    __metadata("design:returntype", Promise)
], ReleasesController.prototype, "createRelease", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, release_entity_1.Release]),
    __metadata("design:returntype", Promise)
], ReleasesController.prototype, "updateRelease", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReleasesController.prototype, "deleteRelease", null);
ReleasesController = __decorate([
    common_1.Controller('releases'),
    __metadata("design:paramtypes", [releases_service_1.ReleasesService])
], ReleasesController);
exports.ReleasesController = ReleasesController;
//# sourceMappingURL=releases.controller.js.map