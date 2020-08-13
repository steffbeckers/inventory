import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { API_BASE_URL } from 'src/api/inventory.api';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.api_base_url,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
