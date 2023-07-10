import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_REQUEST_PROVIDER } from './interceptors/provider';
import { AuthorizationPopupComponent } from './ui/authorization-popup/authorization-popup.component';
import { AuthorizationPopupModule } from './ui/authorization-popup/authorization-popup.module';

@NgModule({
  declarations: [AppComponent, AuthorizationPopupComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthorizationPopupModule
  ],
  providers: [HTTP_REQUEST_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
