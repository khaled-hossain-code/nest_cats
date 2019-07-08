import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: any };

  constructor() {
    console.log('process.env :', process.env.PORT);
    this.envConfig = {
      port: process.env.PORT,
      isProduction: process.env.NODE_ENV === 'production',
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
