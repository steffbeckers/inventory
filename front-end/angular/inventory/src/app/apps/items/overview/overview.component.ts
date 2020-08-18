import { Component, OnInit } from '@angular/core';
import { selectAll } from '../store/selectors/items.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-apps-items-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class ItemsOverviewComponent implements OnInit {
  items$ = this.store.select(selectAll);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
