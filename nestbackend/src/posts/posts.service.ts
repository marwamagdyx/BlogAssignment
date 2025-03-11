import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.schema';
import { CreatePostDto } from '../common/dto/post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async createPost(title: string, content: string): Promise<Post> {
    const newPost = new this.postModel({ title, content });
    return newPost.save();
}

  async likePost(postId: string): Promise<string> {
    const post = await this.postModel.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    post.likes.push('anonymous');
    await post.save();
    return 'Post liked';
  }


  async addComment(postId: string, comment: {content: string }):Promise<Post> {
    const post = await this.postModel.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    post.comments.push(comment);
    await post.save();
    return post;
  }

  async getCommentsByPostId(postId: string):Promise<{ content: string }[]>  {
    const post = await this.postModel.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    return post.comments;
  }
  async fetchPosts(): Promise<Post[]> {
    return this.postModel.find().sort({ createdAt: -1 }).exec();
  }
}