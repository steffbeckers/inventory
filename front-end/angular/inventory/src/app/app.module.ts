import * as fromUI from './store/reducers/ui.reducer';
import { AlertsEffects } from './store/effects/alerts.effects';
import { API_BASE_URL } from 'src/api/inventory.api';
import { AppComponent } from './app.component';
import { AppEffects } from './store/effects/app.effects';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { ErrorInterceptor } from 'src/app/shared/interceptors/error.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { metaReducers, reducers } from './store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { UIEffects } from './store/effects/ui.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
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
    StoreModule.forFeature(fromUI.uiFeatureKey, fromUI.reducer),
    EffectsModule.forFeature([UIEffects]),
  ],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.api_base_url,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
