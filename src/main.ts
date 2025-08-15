import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from 'process';

env.confi
async function gigPoint() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials:true,
  })
    const swaggerConfig = new DocumentBuilder()
      .setTitle('GigPoint Api')
      .setDescription('API for managing GigPoint')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 5000);
}
gigPoint();
