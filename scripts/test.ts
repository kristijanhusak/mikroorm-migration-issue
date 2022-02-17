import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { AppService } from '../src/app.service';

const execute = async () => {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: false,
  });
  const appService = app.get(AppService);
  console.log(await appService.getCustomersFromScript());
};

execute()
  .then(() => {
    console.log('Finished');
    return process.exit(0);
  })
  .catch((err) => {
    console.log('Error:', err);
    return process.exit(1);
  });

