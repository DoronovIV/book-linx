import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  constructor(private readonly _auth: AuthorizationService, private readonly _router: Router) {}

  public exitApp() {
    this._auth.signOut();
    this._router.navigateByUrl('/');
  }
}
