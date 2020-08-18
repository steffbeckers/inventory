import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcCallbackComponent } from './oidc-callback.component';

describe('OidcCallbackComponent', () => {
  let component: OidcCallbackComponent;
  let fixture: ComponentFixture<OidcCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OidcCallbackComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OidcCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
