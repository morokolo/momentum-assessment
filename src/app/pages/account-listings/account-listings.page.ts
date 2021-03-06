import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccountRequest } from 'src/app/interfaces/requests/account-request';
import { LocalStorageService } from 'src/app/services/local-storage-service';
import {
  loadAccountInfo,
  loadAccountss,
} from 'src/app/ngrx-store/actions/accounts.actions';

import {
  accountsLoader,
  accountsErrorResponse,
  accountsDataResponse,
} from 'src/app/ngrx-store/selectors/accounts.selectors';
import { Observable } from 'rxjs';
import { AccountsResponse } from 'src/app/interfaces/responses/accounts-response';
import { AccountInfoRequest } from 'src/app/interfaces/requests/account-info-request';
import { ModalController } from '@ionic/angular';
import { AccountInfoPage } from '../account-info/account-info.page';
@Component({
  selector: 'app-account-listings',
  templateUrl: './account-listings.page.html',
  styleUrls: ['./account-listings.page.scss'],
})
export class AccountListingsPage implements OnInit {
  public localId;
  public idToken;
  loading$: Observable<boolean> = this.store.select(accountsLoader);
  accountInfo$: Observable<AccountsResponse> = this.store.select(
    accountsDataResponse
  );
  error$: Observable<boolean> = this.store.select(accountsErrorResponse);

  constructor(
    public modalController: ModalController,
    public localStorageService: LocalStorageService,
    public store: Store
  ) {}

  ngOnInit() {
    this.localId = this.localStorageService.getLocalId();
    this.idToken = this.localStorageService.getIdToken();

    if (this.localId && this.idToken) {
      const accountRequest: AccountRequest = {
        localId: this.localId,
        token: this.idToken,
      };

      this.store.dispatch(loadAccountss({ accountRequest }));
    }
  }

  async getAccountInfo(accountNumber) {
    // this.store.dispatch(loadAccountss({ a }));
    if (accountNumber && this.idToken) {
      const modal = await this.modalController.create({
        component: AccountInfoPage,
        componentProps: {
          accNum: accountNumber,
          token: this.idToken,
        },
      });
      return await modal.present();
    }
  }
}
