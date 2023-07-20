import { Module } from '@nestjs/common';
import { Test } from './entities/test.entity';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { Test } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}
