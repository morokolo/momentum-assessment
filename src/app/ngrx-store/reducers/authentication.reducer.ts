import { Action, createReducer, on } from '@ngrx/store';
import { LoginResponse } from 'src/app/interfaces/responses/login-response';
import * as AuthenticationActions from '../actions/authentication.actions';
import { All } from '@ngrx/store-devtools/src/actions';
export const authenticationFeatureKey = 'authentication';

export interface State {
  data: LoginResponse;
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

export const LoginReducer = createReducer(
  initialState,
  on(AuthenticationActions.loadAuthentications, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(
    AuthenticationActions.loadAuthenticationsSuccess,
    (state, { loginResponse }) => ({
      ...state,
      data: loginResponse,
      isLoading: false,
      error: false,
    })
  ),
  on(AuthenticationActions.loadAuthenticationsFailure, (state, { error }) => ({
    ...state,
    message: error.error.message,
    isLoading: false,
    error: true,
  }))
);

export function reducer(state: State | undefined, action: All) {
  return LoginReducer(state, action);
}
