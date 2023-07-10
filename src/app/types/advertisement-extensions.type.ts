import { Advertisement } from '../model/main/advertisement.interface';

export type AdvertisementView = 'catalog | page';
export type AdvertisementListView = 'wide | grid';
export type AdvertisementImage = Advertisement & {
  imagePathList: string[];
};
