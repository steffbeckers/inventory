import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
    path: 'auth',
    // loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    loadChildren: () => AuthModule, // Without lazy loading the Auth module
  },
  {
    path: '',
    loadChildren: () => import('./apps/apps.module').then((m) => m.AppsModule),
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
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
