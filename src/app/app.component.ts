import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './pages/login/services/authorization.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizationDialogComponent } from './ui/authorization-popup/authorization-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'book-linx';

  public static isAuthorized = false;

  constructor(private readonly _authorizationService: AuthorizationService) {}

  public get authorized(): Boolean {
    if (!AppComponent.isAuthorized) {
      let token = this._authorizationService.getToken();
      const dateNow = new Date();

      if (token) {
        if (new Date(token.expirationDate).getTime() > dateNow.getTime()) {
          AppComponent.isAuthorized = true;
        }
      }
    }

    return AppComponent.isAuthorized;
  }
}
