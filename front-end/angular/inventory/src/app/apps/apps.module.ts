import { AppsComponent } from './apps.component';
import { AppsRoutingModule } from './apps-routing.module';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppsComponent],
  imports: [CommonModule, FormsModule, AppsRoutingModule, ClarityModule],
})
export class AppsModule {}
