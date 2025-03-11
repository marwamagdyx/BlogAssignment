import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({ required: true })
  title: string;
  
  @Prop({ required: true })
  content: string;

  @Prop({ default: [], type: [String] })
  likes: string[];

  @Prop({ default: [], type: [{content: String }] })
  comments: { content: string }[];
}

export const PostSchema = SchemaFactory.createForClass(Post);