import { Migration } from '@mikro-orm/migrations';

export class Migration20220203150217 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "images" ("id" uuid not null default uuid_generate_v4(), "image_id" varchar(255) not null);',
    );
    this.addSql(
      'alter table "images" add constraint "images_pkey" primary key ("id");',
    );

    this.addSql(
      'alter table "products" drop constraint if exists "products_image_id_check";',
    );
    this.addSql(
      'alter table "products" alter column "image_id" type uuid using ("image_id"::uuid);',
    );
    this.addSql(
      'alter table "products" alter column "image_id" drop not null;',
    );
    this.addSql(
      'create index "products_image_id_index" on "products" ("image_id");',
    );
    this.addSql('alter table "products" drop column "image_image_id";');

    this.addSql(
      'alter table "customers" drop constraint if exists "customers_product_id_check";',
    );
    this.addSql(
      'alter table "customers" alter column "product_id" type uuid using ("product_id"::uuid);',
    );
    this.addSql('drop index "customers_product_id_index";');
    this.addSql(
      'create index "customers_product_id_index" on "customers" ("product_id");',
    );
  }
}

