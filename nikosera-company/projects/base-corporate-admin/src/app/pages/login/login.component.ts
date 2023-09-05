import { Component } from '@angular/core';
import { ReceivedTokens } from 'angular-oauth2-oidc';
import { AuthService } from 'oauth/src/app/services/auth.service';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { UserService } from '@core/user.service';
import { Router } from '@angular/router';
import { NbCardModule, NbLayoutModule, NbSpinnerModule } from '@nebular/theme';
import { DASHBOARD } from '../../router/app-routes.config';

@Component({
    selector: 'xpc-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [StimulusModule, NbSpinnerModule, NbLayoutModule],
    providers: [AuthService, UserService],
})
export class LoginComponent {
    token!: string | any;
    receivedTokens!: ReceivedTokens;
    private isAuthenticated: boolean = false;
    loading: boolean = false;

    constructor(public authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        console.log('Init Login component');
        this.checkToken();
    }
    
    checkToken = () => {
        const timeout = window.setInterval(() => {

            if (!this.authService.isLogIn()) {
                this.authService.obtainAccessToken();
                this.loading === true;
            }
            this.token = this.authService.getAccessToken();
            if (this.token) {
                this.authService.setAuthToken(this.token);
                // this.router.navigate([DASHBOARD]);
                window.clearInterval(timeout);
                this.loading === false;
            }
        }, 400);
    }
}
