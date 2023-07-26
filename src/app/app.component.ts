import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'book-linx';

  public get authorized() {
    return this._auth.authorized;
  }

  constructor(private readonly _auth: AuthorizationService) {}
}
