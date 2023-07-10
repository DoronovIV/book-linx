import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthorizationDialogModule } from 'src/app/ui/authorization-popup/authorization-dialog.module';
import { AppComponent } from 'src/app/app.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AuthorizationDialogModule, HomeRoutingModule],
})
export class HomeModule {}
