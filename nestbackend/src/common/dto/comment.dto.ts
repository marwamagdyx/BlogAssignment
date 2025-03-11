import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  user: string; // ID of user making the comment

  @IsNotEmpty()
  @IsString()
  post: string; // ID of the post being commented on

  @IsNotEmpty()
  @IsString()
  content: string; // Comment content
}