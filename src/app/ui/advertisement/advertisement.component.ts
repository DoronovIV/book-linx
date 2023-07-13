import { Component, Input } from '@angular/core';
import {
  AdvertisementUI,
  AdvertisementView,
} from 'src/app/model/auxiliary/advertisement-extensions.type';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement-catalog.component.scss', './advertisement-page.component.scss'],
})
export class AdvertisementComponent {
  @Input()
  public ad!: AdvertisementUI;

  @Input()
  public viewType!: AdvertisementView;

  constructor(private readonly _favoritesService: FavoritesService) {}

  public toggle() {
    this._favoritesService.toggle(this.ad.id);
    this.ad.wasAdded = !this.ad.wasAdded;
  }
}
