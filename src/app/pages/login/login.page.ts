import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  loginLoader,
  loginErrorResponse,
  loginMessageResponse,
} from 'src/app/ngrx-store/selectors/authentication.selectors';
import { LoginRequest } from 'src/app/interfaces/requests/login-request';
import { loadAuthentications } from 'src/app/ngrx-store/actions/authentication.actions';
import { LoadingController } from '@ionic/angular';
import { skipUntil } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading$: Observable<boolean> = this.store.select(loginLoader);
  alertMessage$: Observable<string> = this.store.select(loginMessageResponse);
  error$: Observable<boolean> = this.store.select(loginErrorResponse);
  user = {
    username: '',
    password: '',
  };
  constructor(
    private router: Router,
    public store: Store,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  login() {
    //disable button
    // email: 'bob@email.com',
    //   password: 'password',

    const loginRequest: LoginRequest = {
      email: this.user.username,
      password: this.user.password,
      returnSecureToken: true,
    };

    this.store.dispatch(loadAuthentications({ loginRequest }));
  }
}
