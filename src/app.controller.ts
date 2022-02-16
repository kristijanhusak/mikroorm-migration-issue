import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Controller, Get } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { Customer } from './entities/customer.entity';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(Customer)
    private readonly repo: EntityRepository<Customer>,
    private readonly customRepo: CustomerRepository,
  ) {}

  @Get()
  getHello() {
    return this.repo.findAll();
  }

  @Get('custom')
  getCustom() {
    return this.customRepo.findAll();
  }
}
