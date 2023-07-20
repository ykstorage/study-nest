import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from "./entities/test.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { TestRepository } from './entities/test.repository';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: TestRepository,
  ) {}
  
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  // findAll() {
  //   return `This action returns all test`;
  // }
  findAll(): Promise<Test[]> {
    return this.testRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
