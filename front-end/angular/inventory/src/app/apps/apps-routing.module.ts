import { AppsComponent } from './apps.component';
import { IsAuthenticatedAuthGuard } from '../auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    canActivate: [IsAuthenticatedAuthGuard],
    children: [
      {
        path: 'items',
        loadChildren: () =>
          import('./items/items.module').then((m) => m.ItemsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsRoutingModule {}
