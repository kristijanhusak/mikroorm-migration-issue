import { Entity, LoadStrategy, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'customers' })
export class Customer {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string;

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property({ columnType: 'uuid', nullable: true, index: true })
  productId?: string;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  createdAt!: Date;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  updatedAt!: Date;
}
