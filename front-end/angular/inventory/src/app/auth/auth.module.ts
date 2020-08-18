import * as fromAuth from './store/reducers/auth.reducer';
import { AuthComponent } from './auth.component';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthLoginComponent } from './login/login.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { OidcCallbackComponent } from './oidc-callback/oidc-callback.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent, OidcCallbackComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    ClarityModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
