import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Product } from './product.entity';

@Entity({ tableName: 'customers' })
export class Customer {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string;

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @ManyToOne(() => Product, { nullable: true, index: true, eager: true })
  product?: Product;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  createdAt!: Date;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  updatedAt!: Date;
}
