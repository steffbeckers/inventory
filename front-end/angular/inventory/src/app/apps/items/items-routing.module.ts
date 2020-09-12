import { ItemsComponent } from './items.component';
import { ItemsCreateItemComponent } from './create-item/create-item.component';
import { ItemsOverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: 'create',
        component: ItemsCreateItemComponent,
      },
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
