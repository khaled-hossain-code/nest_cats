import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private port: String;

  constructor(config: ConfigService){
    this.port = config.get('port');
  }
  getHello(): any {
    return this.port;
  }
}
