import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [MikroOrmModule.forRoot(), MikroOrmModule.forFeature([Customer])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
