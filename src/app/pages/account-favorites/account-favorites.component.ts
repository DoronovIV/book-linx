import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AdvertisementExtended } from 'src/app/model/auxiliary/advertisement-extensions.type';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-account-favorites',
  templateUrl: './account-favorites.component.html',
  styleUrls: ['./account-favorites.component.scss'],
})
export class AccountFavoritesComponent implements OnInit {
  private _adList: AdvertisementExtended[] = [];

  public get adList() {
    return this._adList;
  }

  constructor(
    private readonly _favsService: FavoritesService,
    private readonly _adService: AdvertisementService,
  ) {}

  ngOnInit(): void {
    this._adService
      .getList()
      .pipe(
        tap((ads) => {
          this._adList = this._favsService.getList(ads);
        }),
      )
      .subscribe();
  }
}
