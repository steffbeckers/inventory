import * as AuthActions from '../store/actions/auth.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class AuthLoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    emailOrUsername: [null, Validators.required],
    password: [null, Validators.required],
    rememberMe: [true],
  });

  constructor(private store: Store, public fb: FormBuilder) {}

  ngOnInit(): void {}

  loginWithPassword(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.store.dispatch(
      AuthActions.loginWithEmailOrUsernamePassword({
        emailOrUsername: this.loginForm.value.emailOrUsername,
        password: this.loginForm.value.password,
        rememberMe: this.loginForm.value.rememberMe,
      })
    );
  }
}
