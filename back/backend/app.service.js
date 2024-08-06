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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("./database/database.service");
let AppService = class AppService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    getHello() {
        return 'Hello World!';
    }
    async save(dto) {
        if (dto.sex) {
            const dtoVal = { age: Number(dto.age), height: Number(dto.height), weight: Number(dto.weight), sex: true, image: dto.image, name: dto.name, lastName: dto.lastName, place: dto.place };
            return this.databaseService.user.create({
                data: dtoVal
            });
        }
        else {
            const dtoVal = { age: Number(dto.age), height: Number(dto.height), weight: Number(dto.weight), sex: false, image: dto.image, name: dto.name, lastName: dto.lastName, place: dto.place };
            return this.databaseService.user.create({
                data: dtoVal
            });
        }
    }
    async delete(dto) {
        return this.databaseService.user.delete({
            where: {
                id: Number(dto.id),
            }
        });
    }
    async update(dto) {
        return this.databaseService.user.update({
            where: {
                id: Number(dto.id)
            },
            data: {
                name: dto.name,
                lastName: dto.lastName,
                age: Number(dto.age),
                sex: dto.sex,
                place: dto.place,
                height: Number(dto.height),
                weight: Number(dto.weight)
            }
        });
    }
    async load() {
        return this.databaseService.user.findMany();
    }
    async select(dto) {
        let res = this.databaseService.user.findUnique({
            where: {
                id: Number(dto.id)
            }
        });
        if (res) {
            return res;
        }
        else {
            return undefined;
        }
    }
    async paginLoad(dto) {
        return this.databaseService.user.findMany({
            skip: (dto.currentPage) * dto.elementsOnPage,
            take: dto.elementsOnPage,
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AppService);
//# sourceMappingURL=app.service.js.map