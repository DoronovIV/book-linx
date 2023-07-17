import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AdvertisementExtended,
  AdvertisementView,
} from 'src/app/model/auxiliary/advertisement-extensions.type';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement-catalog.component.scss', './advertisement-page.component.scss'],
})
export class AdvertisementComponent implements OnInit {
  @Input()
  public ad!: AdvertisementExtended | null | undefined;

  @Input()
  public viewType!: AdvertisementView;

  public titleImageSrc!: string;

  constructor(
    private readonly _favoritesService: FavoritesService,
    private readonly _snackBar: MatSnackBar,
  ) {}

  public ngOnInit(): void {
    const path = this.ad?.imagePathList[0];
    if (path) {
      this.titleImageSrc = path;
    }
  }

  public toggle() {
    if (this.ad) {
      this._favoritesService.toggle(this.ad.id);
      this.ad.wasAdded = !this.ad.wasAdded;
    }
  }

  public copyAddress() {
    this._snackBar.open('Copied to the clipboard', 'Close', { duration: 1500 });
  }
}
