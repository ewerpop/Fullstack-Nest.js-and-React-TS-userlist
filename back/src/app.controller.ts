import { Controller, Get, Post, Body, BadRequestException, UsePipes, ValidationPipe, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { DtoFind, DtoPagin, DtoValid, DtoCreate } from './dto/create.dto';
import * as shortid from 'shortid';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('userCount')
  async count() {
    const res = await this.appService.load()
    return res.length
  }

  @Post('userGet')
  async get(@Body() dto: DtoPagin) {
    return this.appService.paginLoad(dto)
  }

  @Post('userById')
  async select(@Body() dto: DtoFind) {
    if (this.appService.select(dto)) {
      return await this.appService.select(dto)
    } else {
      return undefined
    }
  }
  
  @UseInterceptors(FileInterceptor('image'))
  @Post('userAdd')
  async create(@Body() dto: DtoCreate, @UploadedFile() image) {
    if (!image) {
      throw new BadRequestException('No file uploaded');
    }
    const uploadsDir = path.join(__dirname, '..', 'images')
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }
    const newFileName = `${shortid.generate()}-${image.originalname}`
    const newFilePath = path.join(uploadsDir, newFileName);

    fs.writeFileSync(newFilePath, image.buffer);

    const res = await this.appService.save({...dto, image: newFileName})
    return {id: res.id, image: newFileName}
  }
  
  @Post('userDelete')
  async delete(@Body() dto: DtoFind) {
    return await this.appService.delete(dto) 
  }

  @Post('userEdit')
  async update(@Body() dto: DtoValid) {
    return await this.appService.update(dto)
  }
}
