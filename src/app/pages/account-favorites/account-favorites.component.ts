import { Component, OnInit } from '@angular/core';
import { AdvertisementUI } from 'src/app/model/auxiliary/advertisement-extensions.type';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-account-favorites',
  templateUrl: './account-favorites.component.html',
  styleUrls: ['./account-favorites.component.scss'],
})
export class AccountFavoritesComponent implements OnInit {
  private _adList: AdvertisementUI[] = [];

  private get adList() {
    return this._adList;
  }

  constructor(private readonly _favService: FavoritesService) {}

  ngOnInit(): void {
    //this._adList = this._favService.getFullList();
  }
}
