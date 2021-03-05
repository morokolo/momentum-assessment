import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStoreFeature } from 'src/app/constants/constants';
import { AccountsResponse } from 'src/app/interfaces/responses/accounts-response';
import { accountsFeatureKey } from '../reducers/accounts.reducer';

export interface AuthenticationLoginState {
  data: AccountsResponse;
  error: boolean;
  message: string;
  isLoading: boolean;
}

export interface featureState {
  [AuthStoreFeature]: {
    [accountsFeatureKey]: AuthenticationLoginState;
  };
}

export const selectLoginFeature = (state: featureState) =>
  state[AuthStoreFeature][accountsFeatureKey];

export const accountsMessageResponse = createSelector(
  selectLoginFeature,
  (state: AuthenticationLoginState) => state.message
);

export const accountsLoader = createSelector(
  selectLoginFeature,
  (state: AuthenticationLoginState) => state.isLoading
);

export const accountsErrorResponse = createSelector(
  selectLoginFeature,
  (state: AuthenticationLoginState) => state.error
);

export const accountsDataResponse = createSelector(
  selectLoginFeature,
  (state: AuthenticationLoginState) => state.data
);
