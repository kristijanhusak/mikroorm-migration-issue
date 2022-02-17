import { Entity, Index, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Customer } from './customer.entity';

@Entity({ tableName: 'posts' })
export class Post {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id: string;

  @Property()
  title: string;

  @Index()
  @OneToOne(() => Customer)
  customer!: Customer;
}
