import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './posts.controller';
import { PostService } from './posts.service';
import { Post, PostSchema } from './post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}