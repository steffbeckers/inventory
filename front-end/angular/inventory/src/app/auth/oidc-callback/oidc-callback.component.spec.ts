import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthOidcCallbackComponent } from './oidc-callback.component';

describe('AuthOidcCallbackComponent', () => {
  let component: AuthOidcCallbackComponent;
  let fixture: ComponentFixture<AuthOidcCallbackComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AuthOidcCallbackComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOidcCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
