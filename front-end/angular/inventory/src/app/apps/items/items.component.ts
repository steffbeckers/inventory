import * as ItemsActions from './store/actions/items.actions';
import { Component, OnInit } from '@angular/core';
import { selectAll } from './store/selectors/items.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-apps-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());
  }
}
