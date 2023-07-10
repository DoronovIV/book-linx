import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, delay, map } from 'rxjs';
import { Advertisement } from '../model/main/advertisement.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  private _advertisementList$: Observable<Advertisement[]> | null = null;

  constructor(private readonly _http: HttpClient) {}

  public getList(): Observable<Advertisement[]> {
    if (!this._advertisementList$) {
      const url = 'ads';

      this._advertisementList$ = this._http.get<Advertisement[]>(url);
    }

    return this._advertisementList$;
  }

  public getByID(id: string): Observable<Advertisement | undefined> {
    const url = 'ads';

    return this._http.get<Advertisement[]>(url).pipe(
      map((ads) => {
        const ad = ads.find((el) => {
          return (el.id = id);
        });

        return ad;
      }),
    );
  }
}
