import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountFavoritesComponent } from './account-favorites.component';

const routes: Routes = [
  {
    path: '',
    component: AccountFavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountFavoritesRoutingModule {}
