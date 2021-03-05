import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountListingsPageRoutingModule } from './account-listings-routing.module';

import { AccountListingsPage } from './account-listings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountListingsPageRoutingModule
  ],
  declarations: [AccountListingsPage]
})
export class AccountListingsPageModule {}
