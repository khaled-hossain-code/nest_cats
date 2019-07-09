import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [CatsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
