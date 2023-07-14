import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private readonly _favoritesService: FavoritesService,
    private readonly _snackBar: MatSnackBar,
  ) {}

  public toggle() {
    this._favoritesService.toggle(this.ad.id);
    this.ad.wasAdded = !this.ad.wasAdded;
  }

  public copyAddress() {
    this._snackBar.open('Copied to the clipboard', 'Close', { duration: 1000 });
  }
}
