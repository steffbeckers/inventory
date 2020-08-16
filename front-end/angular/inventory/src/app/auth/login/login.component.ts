import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}

  loginWithPassword(): void {
    if (this.loginForm.invalid) {
      return;
    }
  }
}
