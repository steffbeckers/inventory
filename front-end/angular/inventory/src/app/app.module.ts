import { AlertsEffects } from './store/effects/alerts.effects';
import { API_BASE_URL } from 'src/api/inventory.api';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppEffects } from './store/effects/app.effects';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthLoginComponent } from './auth/login/login.component';
import { AuthOidcCallbackComponent } from './auth/oidc-callback/oidc-callback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { ErrorInterceptor } from 'src/app/shared/interceptors/error.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { metaReducers, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {
  AuthModule,
  LogLevel,
  OidcConfigService,
} from 'angular-auth-oidc-client';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';

export function configureAuth(oidcConfigService: OidcConfigService): any {
  return () =>
    oidcConfigService.withConfig({
      stsServer: environment.api_base_url,
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'inventory-angular',
      scope: 'openid profile Inventory.APIAPI',
      responseType: 'code',
      silentRenew: true,
      silentRenewUrl: `${window.location.origin}/silent-renew.html`,
      logLevel: LogLevel.Warn,
    });
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthLoginComponent,
    AuthOidcCallbackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    // TODO: Disable in production:
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects, AlertsEffects]),
    ClarityModule,
  ],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
    {
      provide: API_BASE_URL,
      useValue: environment.api_base_url,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
