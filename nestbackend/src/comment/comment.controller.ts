
import { Controller, Get, Post, Put, Param, Body, Query, Request, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from '../common/dto/comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // Create a comment on a post

  @Post()
  async createComment(@Request() req: any, @Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  // Get all comments for a specific post
  @Get(':postId')
  async getCommentsByPostId(
    @Param('postId') postId: string,
    @Query('page') page: number = 1,  // Default page = 1
    @Query('limit') limit: number = 10 // Default limit = 10
  ) {
    return this.commentService.getCommentsByPostId(postId, Number(page), Number(limit));
  }
}