import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Advertisement } from '../model/main/advertisement.interface';
import {
  AdvertisementExtended,
} from '../model/auxiliary/advertisement-extensions.type';
import { AdvertisementService } from './advertisement.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private _favoriteAdIdList: string[] = [];
  private _favoriteAdList: AdvertisementExtended[] = [];

  private readonly _storingKey = 'favs';

  public get favoriteAdIdList() {
    return this._favoriteAdIdList;
  }

  constructor(private readonly _storingService: LocalStorageService) {
    if (this._favoriteAdIdList) this._loadList();
  }

  public getFullList(list: AdvertisementExtended[]): AdvertisementExtended[] {
    const res: AdvertisementExtended[] = [];

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

  public getPatrialList(list: AdvertisementExtended[]): AdvertisementExtended[] {
    const res: AdvertisementExtended[] = [];

    list.forEach((ad) => {
      const result = this._favoriteAdIdList.indexOf(ad.id);

      if (result !== -1) {
        const item = {
          ...ad,
          wasAdded: true,
        };

        res.push(item);
        this._favoriteAdList.push(item);
      }
    });

    return res;
  }

  public toggle(id: string): void {
    if (this._favoriteAdIdList?.indexOf(id) !== -1) {
      this._remove(id);
    } else this._add(id);
  }

  private _loadList() {
    const res = this._storingService.get<string[]>(this._storingKey);
    if (res) {
      this._favoriteAdIdList = res;
    }
  }

  private _add(id: string) {
    this._favoriteAdIdList?.push(id);
    if (this._favoriteAdIdList) {
      this._storingService.setForce<string[]>(this._storingKey, this._favoriteAdIdList);
    }
  }

  public _remove(id: string) {
    this._favoriteAdIdList?.splice(this._favoriteAdIdList?.indexOf(id), 1);
    this._storingService.setForce<string[]>(this._storingKey, this._favoriteAdIdList);
  }
}
