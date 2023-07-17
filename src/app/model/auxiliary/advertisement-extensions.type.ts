import { Advertisement } from '../main/advertisement.interface';

export type AdvertisementView = 'catalog' | 'page';
export type AdvertisementListView = 'center' | 'grid';
export type AdvertisementExtended = Advertisement & {
  imagePathList: string[];
  address: string;
  wasAdded: boolean;
};
