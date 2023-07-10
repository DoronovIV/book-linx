import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home').then(({ HomeModule }) => HomeModule),
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/login/sign-in').then(({ SignInModule }) => SignInModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
