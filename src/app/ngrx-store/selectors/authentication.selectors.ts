import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStoreFeature } from 'src/app/constants/constants';
import { LoginResponse } from 'src/app/interfaces/responses/login-response';
import { authenticationFeatureKey } from '../reducers/authentication.reducer';

export interface AuthenticationLoginState {
  data: LoginResponse;
  error: boolean;
  message: string;
  isLoading: boolean;
}

export interface featureState {
  [AuthStoreFeature]: {
    [authenticationFeatureKey]: AuthenticationLoginState;
  };
}

export const selectLoginFeature = (state: featureState) =>
  state[AuthStoreFeature][authenticationFeatureKey];

export const loginMessageResponse = createSelector(
  selectLoginFeature,
  (state: AuthenticationLoginState) => state.message
);

export const loginLoader = createSelector(
  selectLoginFeature,
  (state: AuthenticationLoginState) => state.isLoading
);

export const loginErrorResponse = createSelector(
  selectLoginFeature,
  (state: AuthenticationLoginState) => state.error
);

export const loginDataResponse = createSelector(
  selectLoginFeature,
  (state: AuthenticationLoginState) => state.data
);
