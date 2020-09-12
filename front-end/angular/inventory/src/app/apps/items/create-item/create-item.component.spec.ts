import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCreateItemComponent } from './create-item.component';

describe('ItemsCreateItemComponent', () => {
  let component: ItemsCreateItemComponent;
  let fixture: ComponentFixture<ItemsCreateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsCreateItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
