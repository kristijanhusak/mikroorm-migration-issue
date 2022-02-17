import {
  Entity,
  Index,
  LoadStrategy,
  ManyToOne,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Customer } from './customer.entity';
import { Image } from './image.entity';

@Entity({ tableName: 'products' })
export class Product {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string;

  @Property()
  title!: string;

  @Property({ columnType: 'text' })
  description!: string;

  @ManyToOne(() => Image, {
    index: true,
    strategy: LoadStrategy.JOINED,
    eager: true,
    nullable: true,
  })
  image: Image;

  @Index()
  @OneToOne(() => Customer)
  customer!: Customer;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  createdAt!: Date;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  updatedAt!: Date;
}
