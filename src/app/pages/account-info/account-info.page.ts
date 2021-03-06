import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccountInfoRequest } from 'src/app/interfaces/requests/account-info-request';
import { AccountInfoResponse } from 'src/app/interfaces/responses/account-info-response';
import { loadAccountInfo } from 'src/app/ngrx-store/actions/accounts.actions';

import {
  accountInfoDataResponse,
  accountInfoLoader,
  accountInfoErrorResponse,
} from 'src/app/ngrx-store/selectors/account-info.selectors';
@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  accNum;
  token;
  accountInfo$: Observable<AccountInfoResponse> = this.store.select(
    accountInfoDataResponse
  );

  constructor(public store: Store) {}

  ngOnInit() {
    const accountInfoRequest: AccountInfoRequest = {
      accNum: this.accNum,
      token: this.token,
    };

    this.store.dispatch(loadAccountInfo({ accountInfoRequest }));
  }
}
