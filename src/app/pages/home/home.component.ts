import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AdvertisementExtended } from 'src/app/model/auxiliary/advertisement-extensions.type';
import { AuthorizationDialogComponent } from 'src/app/ui/authorization-dialog/authorization-dialog.component';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public commonAdvertisementList: AdvertisementExtended[] = [];

  public get authorized() {
    return this._auth.authorized;
  }

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _adService: AdvertisementService,
    private readonly _auth: AuthorizationService,
    private readonly _favsService: FavoritesService,
  ) {}

  public ngOnInit(): void {
    if (!this.authorized) this._dialog.open(AuthorizationDialogComponent, { disableClose: true });
    this._loadAds();
  }

  private _loadAds(): void {
    this._adService
      .getList()
      .pipe(
        tap((ads) => {
          this.commonAdvertisementList = ads;
        }),
      )
      .subscribe();
  }
}
