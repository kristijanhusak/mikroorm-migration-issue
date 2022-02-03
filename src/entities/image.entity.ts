import { Embeddable, Property } from '@mikro-orm/core';

@Embeddable()
export class Image {
  @Property()
  id: string;

  @Property()
  imageId: string;
}
