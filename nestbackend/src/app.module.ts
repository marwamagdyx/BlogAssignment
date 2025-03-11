
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/socialMediaDB', {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('MongoDB connected');
        });
        connection.on('error', (err) => {
          console.error('MongoDB connection error:', err);
        });
        return connection;
      },
    }),
  
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('MongoDB URI:', process.env.MONGO_URI); // Log AFTER ConfigModule has loaded
  }
}