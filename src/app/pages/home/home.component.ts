import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { AuthorizationDialogComponent } from 'src/app/ui/authorization-popup/authorization-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly _dialog: MatDialog) {}

  public get authorized() {
    return AppComponent.isAuthorized;
  }

  public ngOnInit(): void {
    if (!this.authorized) this._dialog.open(AuthorizationDialogComponent, { disableClose: true });
  }
}
