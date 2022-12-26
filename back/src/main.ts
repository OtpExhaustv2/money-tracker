import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import { AppModule } from './app.module';
import { NumberParamsCastingInterceptor } from './utils/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.useGlobalInterceptors(new NumberParamsCastingInterceptor());
  app.use(passport.initialize());
  await app.listen(6006);
}
bootstrap();
