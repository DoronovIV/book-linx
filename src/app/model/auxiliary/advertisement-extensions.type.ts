import { Advertisement } from '../main/advertisement.interface';
import { CommentExtension } from './comment-extension.interface';

export type AdvertisementView = 'catalog' | 'page';
export type AdvertisementListView = 'center' | 'grid';
export type AdvertisementExtension = Advertisement & {
  imagePathList: string[];
  address: string;
  wasAdded: boolean;
  commentList: CommentExtension[];
};
