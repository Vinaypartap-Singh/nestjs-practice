import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('NestJS API Practice')
    .setDescription(
      'This is a practice API built with NestJS, Prisma ORM, and PostgreSQL for learning and development purposes.',
    )
    .setVersion('1.0.0')
    .addServer('http://localhost:3000', 'Local development server')
    .addTag('Auth', 'Endpoints related to user authentication')
    .addTag('Users', 'User management operations')
    .addTag('Posts', 'Operations related to blog posts or content')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Enter your JWT token',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
