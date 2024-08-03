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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const create_dto_1 = require("./dto/create.dto");
const shortid = require("shortid");
const platform_express_1 = require("@nestjs/platform-express");
const fs = require("fs");
const path = require("path");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async count() {
        const res = await this.appService.load();
        return res.length;
    }
    async get(dto) {
        return this.appService.paginLoad(dto);
    }
    async select(dto) {
        if (this.appService.select(dto)) {
            return await this.appService.select(dto);
        }
        else {
            return undefined;
        }
    }
    async create(dto, image) {
        if (!image) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        const uploadsDir = path.join(__dirname, '..', 'images');
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir);
        }
        const newFileName = `${shortid.generate()}-${image.originalname}`;
        const newFilePath = path.join(uploadsDir, newFileName);
        fs.writeFileSync(newFilePath, image.buffer);
        const res = await this.appService.save({ ...dto, image: newFileName });
        return { id: res.id, image: newFileName };
    }
    async delete(dto) {
        return await this.appService.delete(dto);
    }
    async update(dto) {
        return await this.appService.update(dto);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('userCount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "count", null);
__decorate([
    (0, common_1.Post)('userGet'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.DtoPagin]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('userById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.DtoFind]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "select", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)('userAdd'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.DtoCreate, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('userDelete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.DtoFind]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('userEdit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.DtoValid]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "update", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map