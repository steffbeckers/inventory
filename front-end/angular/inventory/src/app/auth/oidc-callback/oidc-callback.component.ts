import { Component, OnInit } from '@angular/core';

// TODO: Move to action with effect
import { AuthService } from '../auth.service';
// import { User } from 'oidc-client';

@Component({
  selector: 'app-oidc-callback',
  templateUrl: './oidc-callback.component.html',
  styleUrls: ['./oidc-callback.component.scss'],
})
export class OidcCallbackComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    // OIDC test
    // const user: User = await this.authService.completeAuthentication();
    // console.log('USER', user);
  }
}
