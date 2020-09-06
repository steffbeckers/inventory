import * as AuthActions from '../auth/store/actions/auth.actions';
import { Component, OnInit } from '@angular/core';
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

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.store.dispatch(AuthActions.loadUserInfo());
      }
    });
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  // TEST
  refreshToken(): void {
    this.store.dispatch(AuthActions.refreshToken());
  }
}
