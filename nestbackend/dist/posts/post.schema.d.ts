import { Document } from 'mongoose';
export declare class Post extends Document {
    title: string;
    content: string;
    likes: string[];
    comments: {
        content: string;
    }[];
}
export declare const PostSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any, any, Document<unknown, any, Post> & Post & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Post, Document<unknown, {}, import("mongoose").FlatRecord<Post>> & import("mongoose").FlatRecord<Post> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
