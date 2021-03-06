import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStoreFeature } from 'src/app/constants/constants';
import { AccountsResponse } from 'src/app/interfaces/responses/accounts-response';
import { accountsFeatureKey } from '../reducers/accounts.reducer';

export interface State {
  data: AccountsResponse;
  error: boolean;
  message: string;
  isLoading: boolean;
}

export interface featureState {
  [AuthStoreFeature]: {
    [accountsFeatureKey]: State;
  };
}

export const selectAccountFeature = (state: featureState) =>
  state[AuthStoreFeature][accountsFeatureKey];

export const accountsMessageResponse = createSelector(
  selectAccountFeature,
  (state: State) => state.message
);

export const accountsLoader = createSelector(
  selectAccountFeature,
  (state: State) => state.isLoading
);

export const accountsErrorResponse = createSelector(
  selectAccountFeature,
  (state: State) => state.error
);

export const accountsDataResponse = createSelector(
  selectAccountFeature,
  (state: State) => state.data
);
