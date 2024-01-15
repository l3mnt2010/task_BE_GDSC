import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'xin chào tất cả các bạn đã đến với channel project nestjs của mình';
  }
}
