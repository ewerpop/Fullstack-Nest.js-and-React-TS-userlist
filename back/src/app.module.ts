import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [DatabaseModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'frontend'),
    serveRoot: '/',
  }),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'images'),
    serveRoot: '/images',
  }),
],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
