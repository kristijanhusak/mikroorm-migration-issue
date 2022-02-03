import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'images' })
export class Image {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id: string;

  @Property()
  imageId: string;
}
