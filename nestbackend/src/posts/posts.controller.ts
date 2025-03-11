import { Controller, Post, Get, Body, Param, Req } from '@nestjs/common';
import { PostService } from './posts.service';
import { CreatePostDto } from '../common/dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
      return this.postService.createPost(createPostDto.title, createPostDto.content);
  }

  @Post(':id/like')
  likePost(@Param('id') postId: string) {
    return this.postService.likePost(postId);
  }

  @Post(':id/comment')
  addComment(@Param('id') postId: string, @Body() createCommentDto) {
    return this.postService.addComment(postId, createCommentDto);
  }

  @Get(':id/comments')
  getCommentsByPostId(@Param('id') postId: string) {
    return this.postService.getCommentsByPostId(postId);
  }

  @Get()
  fetchPosts() {
    return this.postService.fetchPosts();
  }
}