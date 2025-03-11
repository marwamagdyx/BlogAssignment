import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI);
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.enableCors(); 
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
    
    console.log('Application is running on: http://localhost:3000');
  } catch (error) {
    console.error('Error starting the application:', error);
  }
}
bootstrap();