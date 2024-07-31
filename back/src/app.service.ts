import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getLog(value: ReadableStream): string {
    console.log(value)
    return String(value)
  }
}
