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

  private readonly _storingKey = 'favs';

  constructor(
    private readonly _storingService: LocalStorageService,
    private readonly _adService: AdvertisementService,
  ) {
    if (this._favoriteAdIdList) this._loadList();
  }

  public getList(list: AdvertisementExtended[]): AdvertisementUI[] {
    const res = list.map((ad) => {
      if (
        this._favoriteAdIdList.find((el) => {
          el === ad.id;
        })
      )
        return {
          ...ad,
          wasAdded: true,
        };

      return {
        ...ad,
        wasAdded: false,
      };
    });

    return res;
  }

  private _loadList() {
    const res = this._storingService.get<string[]>(this._storingKey);
    if (res) {
      this._favoriteAdIdList = res;
    }
  }

  public add(id: string) {
    this._favoriteAdIdList?.push(id);
    this._favoriteAdIdList?.sort();
    if (this._favoriteAdIdList) {
      this._storingService.setForce<string[]>(this._storingKey, this._favoriteAdIdList);
    }
  }
}
