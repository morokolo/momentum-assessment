import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountListingsPage } from './account-listings.page';

const routes: Routes = [
  {
    path: '',
    component: AccountListingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountListingsPageRoutingModule {}
