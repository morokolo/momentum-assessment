import { createAction, props } from '@ngrx/store';
import { AccountInfoRequest } from 'src/app/interfaces/requests/account-info-request';
import { AccountRequest } from 'src/app/interfaces/requests/account-request';
import { AccountInfoResponse } from 'src/app/interfaces/responses/account-info-response';
import { AccountsResponse } from 'src/app/interfaces/responses/accounts-response';

export const loadAccountss = createAction(
  '[Accounts] Load Accountss',
  props<{ accountRequest: AccountRequest }>()
);

export const loadAccountssSuccess = createAction(
  '[Accounts] Load Accountss Success',
  props<{ accountsResponse: AccountsResponse }>()
);

export const loadAccountssFailure = createAction(
  '[Accounts] Load Accountss Failure',
  props<{ error: any }>()
);

export const loadAccountInfo = createAction(
  '[Accounts] Load Account Info',
  props<{ accountInfoRequest: AccountInfoRequest }>()
);

export const loadAccountInfoSuccess = createAction(
  '[Accounts] Load Account Info Success',
  props<{ accountInfoResponse: AccountInfoResponse }>()
);

export const loadAccountInfoFailure = createAction(
  '[Accounts] Load Account Info Failure',
  props<{ error: any }>()
);
