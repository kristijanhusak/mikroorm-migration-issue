import { Migration } from '@mikro-orm/migrations';

export class Migration20220217110540 extends Migration {

  async up(): Promise<void> {
    this.addSql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    this.addSql('create table "customers" ("id" uuid not null default uuid_generate_v4(), "first_name" varchar(255) not null, "last_name" varchar(255) not null, "created_at" timestamp not null default now(), "updated_at" timestamp not null default now());');
    this.addSql('alter table "customers" add constraint "customers_pkey" primary key ("id");');

    this.addSql('create table "images" ("id" uuid not null default uuid_generate_v4(), "image_id" varchar(255) not null, "customer_id" uuid not null);');
    this.addSql('create index "images_customer_id_index" on "images" ("customer_id");');
    this.addSql('alter table "images" add constraint "images_customer_id_unique" unique ("customer_id");');
    this.addSql('alter table "images" add constraint "images_pkey" primary key ("id");');

    this.addSql('create table "posts" ("id" uuid not null default uuid_generate_v4(), "title" varchar(255) not null, "customer_id" uuid not null);');
    this.addSql('create index "posts_customer_id_index" on "posts" ("customer_id");');
    this.addSql('alter table "posts" add constraint "posts_customer_id_unique" unique ("customer_id");');
    this.addSql('alter table "posts" add constraint "posts_pkey" primary key ("id");');

    this.addSql('create table "products" ("id" uuid not null default uuid_generate_v4(), "title" varchar(255) not null, "description" text not null, "image_id" uuid null, "customer_id" uuid not null, "created_at" timestamp not null default now(), "updated_at" timestamp not null default now());');
    this.addSql('create index "products_image_id_index" on "products" ("image_id");');
    this.addSql('create index "products_customer_id_index" on "products" ("customer_id");');
    this.addSql('alter table "products" add constraint "products_customer_id_unique" unique ("customer_id");');
    this.addSql('alter table "products" add constraint "products_pkey" primary key ("id");');

    this.addSql('alter table "images" add constraint "images_customer_id_foreign" foreign key ("customer_id") references "customers" ("id") on update cascade;');

    this.addSql('alter table "posts" add constraint "posts_customer_id_foreign" foreign key ("customer_id") references "customers" ("id") on update cascade;');

    this.addSql('alter table "products" add constraint "products_image_id_foreign" foreign key ("image_id") references "images" ("id") on update cascade on delete set null;');
    this.addSql('alter table "products" add constraint "products_customer_id_foreign" foreign key ("customer_id") references "customers" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "images" drop constraint "images_customer_id_foreign";');

    this.addSql('alter table "posts" drop constraint "posts_customer_id_foreign";');

    this.addSql('alter table "products" drop constraint "products_customer_id_foreign";');

    this.addSql('alter table "products" drop constraint "products_image_id_foreign";');

    this.addSql('drop table if exists "customers" cascade;');

    this.addSql('drop table if exists "images" cascade;');

    this.addSql('drop table if exists "posts" cascade;');

    this.addSql('drop table if exists "products" cascade;');
  }

}
