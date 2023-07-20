import { Module } from '@nestjs/common';
import { MariaDbConfigService } from './config.service';

@Module({
  providers: [MariaDbConfigService],
})
export class MariaDbConfigModule {}