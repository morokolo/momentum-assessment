import { createAction, props } from '@ngrx/store';
import { LoginRequest } from 'src/app/interfaces/requests/login-request';
import { LoginError } from 'src/app/interfaces/responses/login-error';
import { LoginResponse } from 'src/app/interfaces/responses/login-response';

export const loadAuthentications = createAction(
  '[Authentication] Load Authentications',
  props<{ loginRequest: LoginRequest }>()
);

export const loadAuthenticationsSuccess = createAction(
  '[Authentication] Load Authentications Success',
  props<{ loginResponse: LoginResponse }>()
);

export const loadAuthenticationsFailure = createAction(
  '[Authentication] Load Authentications Failure',
  props<{ error: LoginError }>()
);
