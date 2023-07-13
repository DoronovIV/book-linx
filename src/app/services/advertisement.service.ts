import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, delay, map } from 'rxjs';
import { Advertisement } from '../model/main/advertisement.interface';
import { AdvertisementExtended } from '../model/auxiliary/advertisement-extensions.type';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private _advertisementList$: Observable<AdvertisementExtended[]> | null = null;

  constructor(private readonly _http: HttpClient) {}

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
