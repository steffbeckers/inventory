import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { selectUIState } from './store/selectors/ui.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ui$ = this.store.select(selectUIState);

  constructor(private store: Store, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.ui$.subscribe(ui => {
      // Theme
      if (ui.theme === 'dark') {
        this.document.documentElement.classList.add('dark-theme');
      } else {
        this.document.documentElement.classList.remove('dark-theme');
      }
    });
  }
}
