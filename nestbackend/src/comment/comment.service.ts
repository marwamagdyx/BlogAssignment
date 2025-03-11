import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './comment.schema';
import { CreateCommentDto } from '../common/dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const newComment = new this.commentModel({ ...createCommentDto});
    return await newComment.save();
  }

  async getCommentsByPostId(postId: string, page: number, limit: number) {
    return this.commentModel
      .find({ post: postId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
      
      
  }
}