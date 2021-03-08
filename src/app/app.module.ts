import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers, metaReducers } from './ngrx-store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './ngrx-store/effects/authentication.effects';
import { HttpClientModule } from '@angular/common/http';
import * as fromRoot from './ngrx-store/reducers';
import { AuthStoreFeature } from './constants/constants';
import { AccountsEffects } from './ngrx-store/effects/accounts.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<fromRoot.State>
>('root reducer');
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot({}),
    StoreModule.forFeature(AuthStoreFeature, REDUCER_TOKEN),
    EffectsModule.forRoot([AccountsEffects]),
    EffectsModule.forFeature([AuthenticationEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    { provide: REDUCER_TOKEN, useValue: fromRoot.reducers },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
