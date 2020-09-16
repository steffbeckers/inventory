import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { selectUIState } from './store/selectors/ui.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ui$ = this.store.select(selectUIState);

  constructor(
    private store: Store,
    private authService: OidcSecurityService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.authService
      .checkAuth()
      .subscribe((auth) =>
        console.log('AppComponent => this.authService.checkAuth()', auth)
      );

    this.ui$.subscribe((ui) => {
      // Theme
      if (ui.theme === 'dark') {
        this.document.documentElement.classList.add('dark-theme');
      } else {
        this.document.documentElement.classList.remove('dark-theme');
      }
    });
  }
}
