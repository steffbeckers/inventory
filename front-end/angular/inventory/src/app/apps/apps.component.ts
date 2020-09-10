import * as AlertActions from '../store/actions/alerts.actions';
import * as AuthActions from '../auth/store/actions/auth.actions';
import * as UIActions from '../store/actions/ui.actions';
import { Component, OnInit } from '@angular/core';
import { selectAlertsState } from '../store/selectors/alerts.selectors';
import { selectUIState } from '../store/selectors/ui.selectors';
import { Store } from '@ngrx/store';
import {
  selectUser,
  selectIsAuthenticated,
} from '../auth/store/selectors/auth.selectors';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  isAuthenticated$ = this.store.select(selectIsAuthenticated);
  user$ = this.store.select(selectUser);
  alerts$ = this.store.select(selectAlertsState);
  ui$ = this.store.select(selectUIState);
  lightTheme = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.store.dispatch(AuthActions.loadUserInfo());
      }
    });
    this.ui$.subscribe((ui) => {
      this.lightTheme = ui.theme !== 'dark';
    });
  }

  toggleTheme(): void {
    this.store.dispatch(UIActions.toggleTheme());
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  // TEST
  refreshToken(): void {
    this.store.dispatch(AuthActions.refreshToken());
  }
  addAlert(): void {
    this.store.dispatch(
      AlertActions.addAlert({ alert: { type: 'info', text: 'Test' } })
    );
  }
}
