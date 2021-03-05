import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpRequestService } from 'src/app/services/http-request-service';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as AccountActions from '../actions/accounts.actions';
import { LoginRequest } from 'src/app/interfaces/requests/login-request';
import { EndPoints } from 'src/app/constants/end-points';
import { AppRoutes } from 'src/app/constants/app-routes';
import { AccountRequest } from 'src/app/interfaces/requests/account-request';

@Injectable()
export class AccountsEffects {
  LogUserIn$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.loadAccountss),
      switchMap((payload: any) => {
        const accountRequest: AccountRequest = payload.accountRequest;
        return this.apiService
          .getByIdUri(
            EndPoints.CLIENTS,
            accountRequest.localId,
            accountRequest.token
          )
          .pipe(
            map((accountsResponse) =>
              AccountActions.loadAccountssSuccess({
                accountsResponse: accountsResponse,
              })
            ),
            catchError((error) =>
              of(AccountActions.loadAccountssFailure(error))
            )
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: HttpRequestService,
    private router: Router
  ) {}
}
