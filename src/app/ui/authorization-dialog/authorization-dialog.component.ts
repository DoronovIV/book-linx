import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization-dialog',
  templateUrl: './authorization-dialog.component.html',
  styleUrls: ['./authorization-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationDialogComponent {
  constructor(private readonly _router: Router) {}

  public locateToSignIn() {
    this._router.navigateByUrl('/sign-in');
  }
}
