import { Model } from 'mongoose';
import { Comment } from './comment.schema';
import { CreateCommentDto } from '../common/dto/comment.dto';
export declare class CommentService {
    private commentModel;
    constructor(commentModel: Model<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    getCommentsByPostId(postId: string, page: number, limit: number): Promise<(import("mongoose").Document<unknown, {}, Comment> & Comment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
