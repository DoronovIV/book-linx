import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { AdvertisementExtended } from 'src/app/model/auxiliary/advertisement-extensions.type';
import { AdvertisementService } from 'src/app/services/advertisement.service';

@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent implements OnInit {
  public ad$!: Observable<AdvertisementExtended | undefined>;

  public images: Object[] = [];

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _adSErvice: AdvertisementService,
  ) {}

  public ngOnInit(): void {
    this._onParamsChanged();
  }

  private _onParamsChanged(): void {
    this._activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.ad$ = this._adSErvice.getByID(id);
          return this.ad$;
        }),
        tap((ad: AdvertisementExtended | undefined) => {
          if (ad) {
            console.log(ad);
            ad.imagePathList.forEach((el) => {
              this.images.push({
                image: el,
                thumbImage: el,
                alt: 'img',
                title: '',
              });
            });
          }
        }),
      )
      .subscribe();
  }
}
