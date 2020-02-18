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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const link_entity_1 = require("../../shared/entities/link.entity");
const artist_1 = require("../../shared/models/artist");
let Release = class Release {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Release.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Release.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => link_entity_1.Link, {
        cascade: true,
        eager: true,
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Release.prototype, "linkList", void 0);
Release = __decorate([
    typeorm_1.Entity()
], Release);
exports.Release = Release;
//# sourceMappingURL=release.entity.js.map