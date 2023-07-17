import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, delay, map, switchMap, tap } from 'rxjs';
import { Advertisement } from '../model/main/advertisement.interface';
import { AdvertisementExtended } from '../model/auxiliary/advertisement-extensions.type';
import { LocalStorageService } from './local-storage.service';
import { FavoritesService } from './favorites.service';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private _advertisementList$: Observable<AdvertisementExtended[]> | null = null;

  private _favoriteAdIdList: string[] = [];

  private readonly _storingKey = 'favs';

  constructor(
    private readonly _storingService: LocalStorageService,
    private readonly _http: HttpClient,
    private readonly _favService: FavoritesService,
  ) {}

  public getList(): Observable<AdvertisementExtended[]> {
    if (!this._advertisementList$) {
      const url = 'ads';

      this._favoriteAdIdList = this._favService.favoriteAdIdList;

      this._advertisementList$ = this._http.get<AdvertisementExtended[]>(url).pipe(
        tap((ads: AdvertisementExtended[]) => {
          let resultItem: AdvertisementExtended;
          ads.forEach((el) => {
            const index = this._favoriteAdIdList.indexOf(el.id);

            if (index !== -1) {
              el.wasAdded = true;
            } else {
              el.wasAdded = false;
            }
          });
        }),
      );
    }

    return this._advertisementList$;
  }

  public getByID(id: string): Observable<AdvertisementExtended | undefined> {
    const url = 'ads';

    return this._http.get<AdvertisementExtended[]>(url).pipe(
      map((ads) => {
        const ad = ads.find((el) => {
          return (el.id = id);
        });

        return ad;
      }),
    );
  }
}
