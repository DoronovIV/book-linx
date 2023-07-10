import { Component } from '@angular/core';
import { AuthorizationService } from './pages/login/services/authorization.service';
import { AuthorizationToken } from './model/auxiliary/authorization-token.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _authorizationService: AuthorizationService) {}

  public title = 'book-linx';

  public static isAuthorized = false;

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
