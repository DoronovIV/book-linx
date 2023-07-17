import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, delay, map, switchMap, tap } from 'rxjs';
import { Advertisement } from '../model/main/advertisement.interface';
import { AdvertisementExtension } from '../model/auxiliary/advertisement-extensions.type';
import { LocalStorageService } from './local-storage.service';
import { FavoritesService } from './favorites.service';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private _advertisementList$: Observable<AdvertisementExtension[]> | null = null;

  private _favoriteAdIdList: string[] = [];

  private readonly _storingKey = 'favs';

  constructor(private readonly _http: HttpClient, private readonly _favService: FavoritesService) {}

  public getList(): Observable<AdvertisementExtension[]> {
    if (!this._advertisementList$) {
      const url = 'ads';

      this._favoriteAdIdList = this._favService.favoriteAdIdList;

      this._advertisementList$ = this._http.get<AdvertisementExtension[]>(url).pipe(
        tap((ads: AdvertisementExtension[]) => {
          let resultItem: AdvertisementExtension;
          ads.forEach((el) => {
            const index = this._favoriteAdIdList.indexOf(el.id);

            if (index !== -1) {
              el.wasAdded = true;
            } else {
              el.wasAdded = false;
            }

            if (el.commentList) {
              el.commentList.forEach((el) => {
                el.dateTime = new Date(el.dateTime);
              });
            }
          });
        }),
      );
    }

    return this._advertisementList$;
  }

  public getByID(id: string): Observable<AdvertisementExtension | undefined> {
    const url = 'ads';

    if (!this._advertisementList$) {
      this.getList();
    }

    return this._advertisementList$!.pipe(
      map((ads) => {
        const ad = ads.find((el) => {
          return el.id === id;
        });
        return ad;
      }),
    );
  }
}
