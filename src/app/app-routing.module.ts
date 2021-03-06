import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'account-listings',
    loadChildren: () =>
      import('./pages/account-listings/account-listings.module').then(
        (m) => m.AccountListingsPageModule
      ),
  },
  {
    path: 'account-info',
    loadChildren: () => import('./pages/account-info/account-info.module').then( m => m.AccountInfoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
