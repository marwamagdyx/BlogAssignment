import { Model } from 'mongoose';
import { Post } from './post.schema';
export declare class PostService {
    private postModel;
    constructor(postModel: Model<Post>);
    createPost(title: string, content: string): Promise<Post>;
    likePost(postId: string): Promise<string>;
    addComment(postId: string, comment: {
        content: string;
    }): Promise<Post>;
    getCommentsByPostId(postId: string): Promise<{
        content: string;
    }[]>;
    fetchPosts(): Promise<Post[]>;
}
