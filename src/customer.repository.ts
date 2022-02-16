import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerRepository extends EntityRepository<Customer> {}
