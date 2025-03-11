import { CommentService } from './comment.service';
import { CreateCommentDto } from '../common/dto/comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(req: any, createCommentDto: CreateCommentDto): Promise<import("./comment.schema").Comment>;
    getCommentsByPostId(postId: string, page?: number, limit?: number): Promise<(import("mongoose").Document<unknown, {}, import("./comment.schema").Comment> & import("./comment.schema").Comment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
