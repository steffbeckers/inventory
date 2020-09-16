import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class AuthLoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    emailOrUsername: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: OidcSecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      console.log(
        'AuthLoginComponent => isAuthenticated$ => isAuthenticated',
        isAuthenticated
      );

      if (isAuthenticated) {
        this.router.navigateByUrl('/');
      }
    });
  }

  // // TODO: Remove
  // demoLoginAdminCredentials(): void {
  //   this.loginForm.patchValue({
  //     emailOrUsername: 'administrator@localhost',
  //     password: 'Administrator1!',
  //   });
  // }

  // loginWithPassword(): void {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   // TODO
  //   console.log(this.loginForm.value);
  // }

  loginWithSSO(): void {
    this.authService.authorize();
  }
}
