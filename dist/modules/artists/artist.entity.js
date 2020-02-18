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
const location_entity_1 = require("../../shared/entities/location.entity");
const artist_1 = require("../../shared/models/artist");
const profile_picture_entity_1 = require("../../shared/entities/profile-picture.entity");
const picture_entity_1 = require("../../shared/entities/picture.entity");
const genre_entity_1 = require("../../shared/entities/genre.entity");
const style_entity_1 = require("../../shared/entities/style.entity");
let Artist = class Artist {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Artist.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Artist.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Artist.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Artist.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Artist.prototype, "type", void 0);
__decorate([
    typeorm_1.OneToOne(type => location_entity_1.Location, {
        cascade: true,
        eager: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", location_entity_1.Location)
], Artist.prototype, "location", void 0);
__decorate([
    typeorm_1.OneToOne(type => profile_picture_entity_1.ProfilePicture, {
        cascade: true,
        eager: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", profile_picture_entity_1.ProfilePicture)
], Artist.prototype, "profilePicture", void 0);
__decorate([
    typeorm_1.ManyToMany(type => picture_entity_1.Picture, {
        cascade: true,
        eager: true,
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Artist.prototype, "pictureList", void 0);
__decorate([
    typeorm_1.Column("integer", { array: true, nullable: true }),
    __metadata("design:type", Array)
], Artist.prototype, "memberList", void 0);
__decorate([
    typeorm_1.Column("integer", { array: true, nullable: true }),
    __metadata("design:type", Array)
], Artist.prototype, "memberOf", void 0);
__decorate([
    typeorm_1.ManyToMany(type => genre_entity_1.Genre, {
        eager: true,
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Artist.prototype, "genreList", void 0);
__decorate([
    typeorm_1.ManyToMany(type => style_entity_1.Style, {
        eager: true,
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Artist.prototype, "styleList", void 0);
__decorate([
    typeorm_1.OneToMany(type => link_entity_1.Link, link => link.artist, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Artist.prototype, "linkList", void 0);
Artist = __decorate([
    typeorm_1.Entity()
], Artist);
exports.Artist = Artist;
//# sourceMappingURL=artist.entity.js.map