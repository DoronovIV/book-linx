import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, delay, map, switchMap, tap } from 'rxjs';
import { Advertisement } from '../model/main/advertisement.interface';
import {
  AdvertisementExtended,
  AdvertisementUI,
} from '../model/auxiliary/advertisement-extensions.type';
import { LocalStorageService } from './local-storage.service';

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
  ) {}

  public getList(): Observable<AdvertisementExtended[]> {
    if (!this._advertisementList$) {
      const url = 'ads';

      this._advertisementList$ = this._http.get<AdvertisementExtended[]>(url);
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
