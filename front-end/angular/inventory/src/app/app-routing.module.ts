import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { IsAuthenticatedGuard } from './auth/auth.guards';
import { AuthLoginComponent } from './auth/login/login.component';
import { AuthOidcCallbackComponent } from './auth/oidc-callback/oidc-callback.component';

const routes: Routes = [
  // Dev testing module
  // {
  //   path: 'dev',
  //   loadChildren: () => import('./dev/dev.module').then((m) => m.DevModule),
  // },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
      },
      {
        path: 'oidc-callback',
        component: AuthOidcCallbackComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('./apps/apps.module').then((m) => m.AppsModule),
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot(routes, { enableTracing: false }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [IsAuthenticatedGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
