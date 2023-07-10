import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthorizationDialogModule } from 'src/app/ui/authorization-dialog/authorization-dialog.module';
import { AppComponent } from 'src/app/app.component'; // actually used;
import { HomeRoutingModule } from './home-routing.module';
import { AdvertisementModule } from 'src/app/ui/advertisement';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AuthorizationDialogModule, HomeRoutingModule, AdvertisementModule],
})
export class HomeModule {}
