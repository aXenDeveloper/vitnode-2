import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getTest } from '@/test.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(getTest());

  await app.listen(8080);
}
bootstrap();
