import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFavoritesRoutingModule } from './account-favorites-routing.module';
import { AccountFavoritesComponent } from './index';

@NgModule({
  declarations: [AccountFavoritesComponent],
  imports: [CommonModule, AccountFavoritesRoutingModule],
  exports: [AccountFavoritesComponent],
})
export class AccountFavoritesModule {}
