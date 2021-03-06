import { Entity, Index, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Customer } from './customer.entity';

@Entity({ tableName: 'images' })
export class Image {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id: string;

  @Property()
  imageId: string;

  @Index()
  @OneToOne(() => Customer)
  customer!: Customer;
}
