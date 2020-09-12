import * as ItemsActions from '../store/actions/items.actions';
import { Component, OnInit } from '@angular/core';
import { selectItemsState } from '../store/selectors/items.selectors';
import { Store } from '@ngrx/store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-apps-items-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class ItemsCreateItemComponent implements OnInit {
  itemsState$ = this.store.select(selectItemsState);
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
    });
  }

  createItem(): void {
    if (this.itemForm.invalid) {
      return;
    }

    this.store.dispatch(ItemsActions.createItem({ item: this.itemForm.value }));
  }

  resetForm(): void {
    this.itemForm.reset();
  }
}
