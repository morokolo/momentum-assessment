import { Action, createReducer, on } from '@ngrx/store';
import { AccountsResponse } from 'src/app/interfaces/responses/accounts-response';
import * as AccountActions from '../actions/accounts.actions';
import { All } from '@ngrx/store-devtools/src/actions';

export const accountsFeatureKey = 'accounts';

export interface State {
  data: AccountsResponse;
  isLoading: boolean;
  error: boolean;
  message: string;
}

export const initialState: State = {
  data: null,
  isLoading: false,
  error: false,
  message: null,
};

export const AccountsReducer = createReducer(
  initialState,
  on(AccountActions.loadAccountss, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(AccountActions.loadAccountssSuccess, (state, { accountsResponse }) => ({
    ...state,
    data: accountsResponse,
    isLoading: false,
    error: false,
  })),
  on(AccountActions.loadAccountssFailure, (state, { error }) => ({
    ...state,
    message: error.error.message,
    isLoading: false,
    error: true,
  }))
);

export function reducer(state: State | undefined, action: All) {
  return AccountsReducer(state, action);
}
