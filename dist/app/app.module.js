"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_module_1 = require("../core/core.module");
const type_orm_module_1 = require("./type-orm/type.orm.module");
const config_module_1 = require("./config/config.module");
const artists_module_1 = require("../modules/artists/artists.module");
const releases_module_1 = require("../modules/releases/releases.module");
const modules = [
    type_orm_module_1.TypeOrmModule,
    config_module_1.ConfigModule,
    core_module_1.CoreModule,
    artists_module_1.ArtistsModule,
    releases_module_1.ReleasesModule
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: modules
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map