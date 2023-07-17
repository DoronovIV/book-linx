import { Comment } from '../main/comment.interface';

export type CommentExtension = Comment & {
  dateTime: Date;
};
