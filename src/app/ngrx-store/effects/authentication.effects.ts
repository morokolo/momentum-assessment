import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpRequestService } from 'src/app/services/http-request-service';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as AuthenticationActions from '../actions/authentication.actions';
import { LoginRequest } from 'src/app/interfaces/requests/login-request';
import { EndPoints } from 'src/app/constants/end-points';
import { AppRoutes } from 'src/app/constants/app-routes';

@Injectable()
export class AuthenticationEffects {
  LogUserIn$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.loadAuthentications),
      switchMap((payload: any) => {
        const loginRequest: LoginRequest = payload.loginRequest;
        return this.apiService.postRequest(EndPoints.LOGIN, loginRequest).pipe(
          map((loginResponse) =>
            AuthenticationActions.loadAuthenticationsSuccess({
              loginResponse: loginResponse,
            })
          ),
          catchError((error) =>
            of(AuthenticationActions.loadAuthenticationsFailure(error))
          )
        );
      }),
      tap((user) => {
        if (user) {
          localStorage.setItem('localId', user['loginResponse'].localId);
          localStorage.setItem('idToken', user['loginResponse'].idToken);
          this.router.navigate([AppRoutes.DASHBOARD]);
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: HttpRequestService,
    private router: Router
  ) {}
}
