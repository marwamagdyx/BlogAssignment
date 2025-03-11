import { PostService } from './posts.service';
import { CreatePostDto } from '../common/dto/post.dto';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    createPost(createPostDto: CreatePostDto): Promise<import("./post.schema").Post>;
    likePost(postId: string): Promise<string>;
    addComment(postId: string, createCommentDto: any): Promise<import("./post.schema").Post>;
    getCommentsByPostId(postId: string): Promise<{
        content: string;
    }[]>;
    fetchPosts(): Promise<import("./post.schema").Post[]>;
}
