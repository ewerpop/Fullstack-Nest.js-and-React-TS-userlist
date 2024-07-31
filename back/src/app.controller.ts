// import { Controller, Get, Post, Req } from '@nestjs/common';
import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test')
  getLog(@Req() req: Request): string{
    console.log(req.body)
    return this.appService.getLog(req.body)
  }

}
