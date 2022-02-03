import { Migration } from '@mikro-orm/migrations';

export class Migration20220203145846 extends Migration {
  async up(): Promise<void> {
    this.addSql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    this.addSql(
      'create table "products" ("id" uuid not null default uuid_generate_v4(), "title" varchar(255) not null, "description" text not null, "image_id" varchar(255) not null, "image_image_id" varchar(255) not null, "created_at" timestamp not null default now(), "updated_at" timestamp not null default now());',
    );
    this.addSql(
      'alter table "products" add constraint "products_pkey" primary key ("id");',
    );

    this.addSql(
      'create table "customers" ("id" uuid not null default uuid_generate_v4(), "first_name" varchar(255) not null, "last_name" varchar(255) not null, "product_id" uuid null, "created_at" timestamp not null default now(), "updated_at" timestamp not null default now());',
    );
    this.addSql(
      'alter table "customers" add constraint "customers_pkey" primary key ("id");',
    );
    this.addSql(
      'create index "customers_product_id_index" on "customers" ("product_id");',
    );
  }
}

