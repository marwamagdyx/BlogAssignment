import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string; 

  @IsNotEmpty()
  @IsString()
  content: string; // Post text content
}

export class LikePostDto {
  @IsNotEmpty()
  @IsString()
  postId: string; // Post being liked
}

export class CreateCommentDto{
  @IsNotEmpty()
  @IsString()
  postId: string;
  
  @IsNotEmpty()
  @IsString()
  content: string;
}