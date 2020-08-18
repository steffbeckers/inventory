import { AuthLoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { OidcCallbackComponent } from './oidc-callback/oidc-callback.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent,
  },
  // OIDC test
  {
    path: 'oidc-callback',
    component: OidcCallbackComponent,
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
