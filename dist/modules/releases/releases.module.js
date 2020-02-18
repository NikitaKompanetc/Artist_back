"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const release_entity_1 = require("./release.entity");
const releases_service_1 = require("./releases.service");
const releases_controller_1 = require("./releases.controller");
let ReleasesModule = class ReleasesModule {
};
ReleasesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([release_entity_1.Release]),
        ],
        exports: [typeorm_1.TypeOrmModule],
        providers: [releases_service_1.ReleasesService],
        controllers: [releases_controller_1.ReleasesController]
    })
], ReleasesModule);
exports.ReleasesModule = ReleasesModule;
//# sourceMappingURL=releases.module.js.map