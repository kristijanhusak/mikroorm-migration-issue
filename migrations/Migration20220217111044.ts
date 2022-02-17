import { Migration } from '@mikro-orm/migrations';

export class Migration20220217111044 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "comment" ("id" uuid not null default uuid_generate_v4(), "title" varchar(255) not null, "customer_id" uuid not null);');
    this.addSql('create index "comment_customer_id_index" on "comment" ("customer_id");');
    this.addSql('alter table "comment" add constraint "comment_customer_id_unique" unique ("customer_id");');
    this.addSql('alter table "comment" add constraint "comment_pkey" primary key ("id");');

    this.addSql('alter table "comment" add constraint "comment_customer_id_foreign" foreign key ("customer_id") references "customers" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "comment" cascade;');
  }

}
