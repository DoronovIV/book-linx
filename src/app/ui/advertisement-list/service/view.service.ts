import { Injectable } from '@angular/core';
import { AdvertisementListView } from '../../../model/auxiliary/advertisement-extensions.type';
import { LocalStorageService } from '../../../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private _view: AdvertisementListView = 'grid';

  private readonly _viewKey = 'list-view';

  public get view() {
    return this._view;
  }

  constructor(private readonly _storage: LocalStorageService) {
    this._getViewFromStorage();
  }

  public toggleView() {
    this._toggleProperty();
    this._storage.setForce(this._viewKey, this._view);
  }

  private _toggleProperty() {
    if (this.view === 'center') {
      this._view = 'grid';
    } else this._view = 'center';
  }

  private _getViewFromStorage() {
    const view = this._storage.get<AdvertisementListView>(this._viewKey);

    if (view) {
      this._view = view;
    } else {
      this._view = 'grid';
    }
  }
}
