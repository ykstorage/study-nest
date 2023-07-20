// import { EntityRepository, Repository } from 'typeorm';
// import { Test } from './test.entity';

// @EntityRepository(Test) -> deprecated 됨 근데 역할이 머지?
// export class TestRepository extends Repository<Test> {}

import { Repository } from 'typeorm';
import { Test } from './test.entity';

export class TestRepository extends Repository<Test> {}