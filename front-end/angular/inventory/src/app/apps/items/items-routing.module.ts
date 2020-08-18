import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { ItemsOverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: '',
        component: ItemsOverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
