import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { AuthorizationDialogComponent } from 'src/app/ui/authorization-dialog/authorization-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public get authorized() {
    return AppComponent.isAuthorized;
  }

  constructor(private readonly _dialog: MatDialog) {}

  public ngOnInit(): void {
    if (!this.authorized) this._dialog.open(AuthorizationDialogComponent, { disableClose: true });
  }
}
