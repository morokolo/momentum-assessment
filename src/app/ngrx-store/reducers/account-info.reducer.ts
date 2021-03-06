import { Action, createReducer, on } from '@ngrx/store';
import { AccountInfoResponse } from 'src/app/interfaces/responses/account-info-response';
import * as AccountActions from '../actions/accounts.actions';
import { All } from '@ngrx/store-devtools/src/actions';

export const accountInfoFeatureKey = 'accountInfo';

export interface State {
  data: AccountInfoResponse;
  isLoading: boolean;
  error: boolean;
  message: string;
}

export const initialState: State = {
  data: {
    balance: 0,
    overdraft: 0,
  },
  isLoading: false,
  error: false,
  message: null,
};

export const AccountInfoReducer = createReducer(
  initialState,
  on(AccountActions.loadAccountInfo, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(
    AccountActions.loadAccountInfoSuccess,
    (state, { accountInfoResponse }) => ({
      ...state,
      data: accountInfoResponse,
      isLoading: false,
      error: false,
    })
  ),
  on(AccountActions.loadAccountInfoFailure, (state, { error }) => ({
    ...state,
    message: error.error.message,
    isLoading: false,
    error: true,
  }))
);

export function reducer(state: State | undefined, action: All) {
  return AccountInfoReducer(state, action);
}
