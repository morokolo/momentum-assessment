import { createAction, props } from '@ngrx/store';
import { AccountRequest } from 'src/app/interfaces/requests/account-request';
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
