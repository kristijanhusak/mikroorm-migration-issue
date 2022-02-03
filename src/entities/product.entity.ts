import { Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Image } from './image.entity';

@Entity({ tableName: 'products' })
export class Product {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string;

  @Property()
  title!: string;

  @Property({ columnType: 'text' })
  description!: string;

  @Embedded()
  image: Image;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  createdAt!: Date;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  updatedAt!: Date;
}
