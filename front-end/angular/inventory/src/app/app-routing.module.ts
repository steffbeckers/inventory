import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  // Dev testing module
  // {
  //   path: 'dev',
  //   loadChildren: () => import('./dev/dev.module').then((m) => m.DevModule),
  // },
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
    RouterModule.forRoot(routes, { enableTracing: false }),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
