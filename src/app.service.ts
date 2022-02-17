import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class AppService {
  constructor(private repo: CustomerRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  getCustomers() {
    return this.repo.findAll();
  }
}
