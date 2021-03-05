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

export interface State {
  [fromAuthentication.authenticationFeatureKey]: fromAuthentication.State;
  [fromAccounts.accountsFeatureKey]: fromAccounts.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromAuthentication.authenticationFeatureKey]: fromAuthentication.reducer,
  [fromAccounts.accountsFeatureKey]: fromAccounts.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
