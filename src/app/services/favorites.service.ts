import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Advertisement } from '../model/main/advertisement.interface';
import {
  AdvertisementExtended,
  AdvertisementUI,
} from '../model/auxiliary/advertisement-extensions.type';
import { AdvertisementService } from './advertisement.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private _favoriteAdIdList: string[] = [];
  private _favoriteAdList: AdvertisementUI[] = [];

  private readonly _storingKey = 'favs';

  constructor(
    private readonly _storingService: LocalStorageService,
    private readonly _adService: AdvertisementService,
  ) {
    if (this._favoriteAdIdList) this._loadList();
  }

  public getFullList(list: AdvertisementExtended[]): AdvertisementUI[] {
    const res: AdvertisementUI[] = [];

    list.forEach((ad) => {
      const result = this._favoriteAdIdList.indexOf(ad.id);

      if (result !== -1) {
        const item = {
          ...ad,
          wasAdded: true,
        };

        res.push(item);
        this._favoriteAdList.push(item);
      } else
        res.push({
          ...ad,
          wasAdded: false,
        });
    });

    return res;
  }

  public getFavoritesList() {}

  private _loadList() {
    const res = this._storingService.get<string[]>(this._storingKey);
    if (res) {
      this._favoriteAdIdList = res;
    }
  }

  private _add(id: string) {
    this._favoriteAdIdList?.push(id);
    this._favoriteAdIdList?.sort();
    if (this._favoriteAdIdList) {
      this._storingService.setForce<string[]>(this._storingKey, this._favoriteAdIdList);
    }
  }

  public _remove(id: string) {
    this._favoriteAdIdList?.splice(this._favoriteAdIdList?.indexOf(id), 1);
    this._storingService.setForce<string[]>(this._storingKey, this._favoriteAdIdList);
  }

  public toggle(id: string): void {
    if (this._favoriteAdIdList?.indexOf(id) !== -1) {
      this._remove(id);
    } else this._add(id);
  }
}
