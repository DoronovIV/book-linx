import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'book-linx';

  public static isAuthorized = false;

  public get authorized(): Boolean {
    return AppComponent.isAuthorized;
  }
}
