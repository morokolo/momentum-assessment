import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStoreFeature } from 'src/app/constants/constants';
import { AccountInfoResponse } from 'src/app/interfaces/responses/account-info-response';
import { accountInfoFeatureKey } from '../reducers/account-info.reducer';

export interface State {
  data: AccountInfoResponse;
  error: boolean;
  message: string;
  isLoading: boolean;
}

export interface featureState {
  [AuthStoreFeature]: {
    [accountInfoFeatureKey]: State;
  };
}

export const selectAccountInfoFeature = (state: featureState) =>
  state[AuthStoreFeature][accountInfoFeatureKey];

export const accountInfoMessageResponse = createSelector(
  selectAccountInfoFeature,
  (state: State) => state.message
);

export const accountInfoLoader = createSelector(
  selectAccountInfoFeature,
  (state: State) => state.isLoading
);

export const accountInfoErrorResponse = createSelector(
  selectAccountInfoFeature,
  (state: State) => state.error
);

export const accountInfoDataResponse = createSelector(
  selectAccountInfoFeature,
  (state: State) => state.data
);
