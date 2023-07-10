import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, delay, map } from 'rxjs';
import { Advertisement } from '../model/main/advertisement.interface';
import { AdvertisementImage } from '../types/advertisement-extensions.type';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private _advertisementList$: Observable<AdvertisementImage[]> | null = null;

  constructor(private readonly _http: HttpClient) {}

  public getList(): Observable<AdvertisementImage[]> {
    if (!this._advertisementList$) {
      const url = 'ads';

      this._advertisementList$ = this._http.get<AdvertisementImage[]>(url);
    }

    return this._advertisementList$;
  }

  public getByID(id: string): Observable<AdvertisementImage | undefined> {
    const url = 'ads';

    return this._http.get<AdvertisementImage[]>(url).pipe(
      map((ads) => {
        const ad = ads.find((el) => {
          return (el.id = id);
        });

        return ad;
      }),
    );
  }
}
