import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { CustomerRepository } from '../customer.repository';
import { Post } from './post.entity';
import { Comment } from './comment.entity';
import { Product } from './product.entity';

@Entity({ tableName: 'customers', customRepository: () => CustomerRepository })
export class Customer {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string;

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @OneToOne(() => Product, (product) => product.customer, { eager: true })
  product: Product;

  @OneToOne(() => Post, (post) => post.customer, { eager: true })
  post: Post;

  @OneToOne(() => Comment, (comment) => comment.customer, { eager: true })
  comment: Comment;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  createdAt!: Date;

  @Property({ columnType: 'timestamp', length: 6, defaultRaw: `now()` })
  updatedAt!: Date;
}
