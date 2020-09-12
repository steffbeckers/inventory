import { Component, OnInit } from '@angular/core';
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
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
    });
  }

  resetForm(): void {
    this.itemForm.reset();
  }

  createItem(): void {
    if (this.itemForm.invalid) {
      return;
    }

    console.log(this.itemForm.value);
  }
}
