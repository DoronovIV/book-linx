import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFavoritesRoutingModule } from './account-favorites-routing.module';
import { AccountFavoritesComponent } from './index';
import { AdvertisementListModule } from 'src/app/ui/advertisement-list/advertisement-list.module';

@NgModule({
  declarations: [AccountFavoritesComponent],
  imports: [CommonModule, AccountFavoritesRoutingModule, AdvertisementListModule],
  exports: [AccountFavoritesComponent],
})
export class AccountFavoritesModule {}
