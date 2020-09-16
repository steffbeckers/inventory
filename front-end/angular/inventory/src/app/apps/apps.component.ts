import * as AlertActions from '../store/actions/alerts.actions';
import * as UIActions from '../store/actions/ui.actions';
import { Component, OnInit } from '@angular/core';
import { selectAlertsState } from '../store/selectors/alerts.selectors';
import { selectUIState } from '../store/selectors/ui.selectors';
import { Store } from '@ngrx/store';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  alerts$ = this.store.select(selectAlertsState);
  ui$ = this.store.select(selectUIState);
  lightTheme = false;

  constructor(private store: Store, public authService: OidcSecurityService) {}

  ngOnInit(): void {
    this.ui$.subscribe((ui) => {
      this.lightTheme = ui.theme !== 'dark';
    });
  }

  toggleTheme(): void {
    this.store.dispatch(UIActions.toggleTheme());
  }

  logout(): void {
    this.authService.logoff();
  }

  // TEST
  // addAlert(): void {
  //   this.store.dispatch(
  //     AlertActions.addAlert({ alert: { type: 'info', text: 'Test' } })
  //   );
  // }
}
