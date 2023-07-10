import { Component } from '@angular/core';
import { AuthorizationService } from './pages/login/services/authorization.service';

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
    const token = this._authorizationService.getToken();
    const dateNow = new Date();

    if (token) {
      if (dateNow.getTime() > token.expirationDate.getTime()) {
        return true;
      }
    }

    return false;
  }
}
