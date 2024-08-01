import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { DtoFind, DtoPagin, DtoValid } from './dto/create.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('userAll')
  async load() {
    return await this.appService.load()
  }

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
    return await this.appService.select(dto)
  }

  
  @Post('userAdd')
  async create(@Body() dto: DtoValid) {
    const res = await this.appService.save(dto)
    return res.id
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
