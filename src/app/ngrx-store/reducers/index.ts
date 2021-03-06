import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuthentication from './authentication.reducer';
import * as fromAccounts from './accounts.reducer';
import * as fromAccountInfo from './account-info.reducer';

export interface State {
  [fromAuthentication.authenticationFeatureKey]: fromAuthentication.State;
  [fromAccounts.accountsFeatureKey]: fromAccounts.State;
  [fromAccountInfo.accountInfoFeatureKey]: fromAccountInfo.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromAuthentication.authenticationFeatureKey]: fromAuthentication.reducer,
  [fromAccounts.accountsFeatureKey]: fromAccounts.reducer,
  [fromAccountInfo.accountInfoFeatureKey]: fromAccountInfo.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
