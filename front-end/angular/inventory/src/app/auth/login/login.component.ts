import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// TODO: Move to action with effect
import { AuthService } from '../auth.service';
import { User } from 'oidc-client';

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

  constructor(public fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  loginWithPassword(): void {
    if (this.loginForm.invalid) {
      return;
    }
  }

  async loginWithOIdc(): Promise<void> {
    // TESTing OIdc auth flow:

    const user: User = await this.authService.getCurrentUser();

    console.log('USER', user);

    if (!user) {
      this.authService.startAuthentication();
    }
  }
}
