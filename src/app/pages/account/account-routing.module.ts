import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountFavoritesComponent } from '../account-favorites';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  {
    path: 'favorites',
    component: AccountFavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
