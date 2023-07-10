import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_REQUEST_PROVIDER } from './interceptors/provider';
import { AuthorizationDialogModule } from './ui/authorization-popup/authorization-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [HTTP_REQUEST_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
