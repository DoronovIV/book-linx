import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_REQUEST_PROVIDER } from './interceptors/provider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdvertisementComponent } from './pages/advertisement/advertisement.component';

@NgModule({
  declarations: [AppComponent, AdvertisementComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  bootstrap: [AppComponent],
  providers: [HTTP_REQUEST_PROVIDER],
})
export class AppModule {}
