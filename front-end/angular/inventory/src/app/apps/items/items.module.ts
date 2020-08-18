import * as fromItems from './store/reducers/items.reducer';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ItemsComponent } from './items.component';
import { ItemsEffects } from './store/effects/items.effects';
import { ItemsOverviewComponent } from './overview/overview.component';
import { ItemsRoutingModule } from './items-routing.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ItemsComponent, ItemsOverviewComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    StoreModule.forFeature(fromItems.itemsFeatureKey, fromItems.reducer),
    EffectsModule.forFeature([ItemsEffects]),
    ClarityModule,
  ],
})
export class ItemsModule {}
