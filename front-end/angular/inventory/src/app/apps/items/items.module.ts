import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [ItemsComponent],
  imports: [CommonModule, ItemsRoutingModule, ClarityModule],
})
export class ItemsModule {}
