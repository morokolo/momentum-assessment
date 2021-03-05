import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccountRequest } from 'src/app/interfaces/requests/account-request';
import { LocalStorageService } from 'src/app/services/local-storage-service';
import { loadAccountss } from 'src/app/ngrx-store/actions/accounts.actions';

import {
  accountsLoader,
  accountsErrorResponse,
  accountsDataResponse,
} from 'src/app/ngrx-store/selectors/accounts.selectors';
import { Observable } from 'rxjs';
import { AccountsResponse } from 'src/app/interfaces/responses/accounts-response';
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
}
