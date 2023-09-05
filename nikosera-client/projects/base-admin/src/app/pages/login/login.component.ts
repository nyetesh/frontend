import { Component } from '@angular/core';
import { ReceivedTokens } from 'angular-oauth2-oidc';
import { AuthService } from 'oauth/src/app/services/auth.service';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'xpa-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [StimulusModule],
    providers: [AuthService, UserService],
})
export class LoginComponent {
    token!: string | any;
    receivedTokens!: ReceivedTokens;
    private isAuthenticated: boolean = false;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
       // this.handleLoginClick();
    }

    handleLoginClick() {
        if (!this.authService.isLogIn()) {
            this.authService.obtainAccessToken();
        }
        this.token = this.authService.getAccessToken();

        this.authService.setAuthToken(this.token);
        //this.router.navigate([RoutingConstants.DASHBOARD]);
    }
}
