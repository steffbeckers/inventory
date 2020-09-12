import * as fromItems from './store/reducers/items.reducer';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './items.component';
import { ItemsCreateItemComponent } from './create-item/create-item.component';
import { ItemsEffects } from './store/effects/items.effects';
import { ItemsOverviewComponent } from './overview/overview.component';
import { ItemsRoutingModule } from './items-routing.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemsOverviewComponent,
    ItemsCreateItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
    StoreModule.forFeature(fromItems.itemsFeatureKey, fromItems.reducer),
    EffectsModule.forFeature([ItemsEffects]),
    ClarityModule,
  ],
})
export class ItemsModule {}
