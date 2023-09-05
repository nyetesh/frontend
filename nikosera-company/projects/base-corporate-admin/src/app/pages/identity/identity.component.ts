import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from 'oauth/src/app/services/auth.service';
import { AdminService, UserInfo } from '@core/admin.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '@core/user.service';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbSpinnerModule } from '@nebular/theme';

@Component({
    templateUrl: './identity.component.html',
    standalone: true,
    imports: [CommonModule, NbSpinnerModule, NbLayoutModule],
    providers: [AuthService, AdminService],
    selector: 'xpa-identity',
})
export class IdentityComponent implements OnInit {
    isLoading: boolean = false;
    get accessToken() {
        return this.authService.getAccessToken();
    }
    get authToken() {
        console.log('token', this.authService.getAuthToken());
        return this.authService.getAuthToken();
    }

    set accessToken(value: string) {
        if (value) {
            this.token = value;
        }
    }
    constructor(
        private authService: AuthService,
        private adminService: AdminService,
        private router: Router,
        private userService: UserService,
        private oauthService: OAuthService
    ) {}

    token!: string | any;

    ngOnInit(): void {
        this.oauthService.events.subscribe(() => {
            this.token = this.oauthService.getAccessToken();
            sessionStorage.setItem('AccessToken', this.token);
            this.getUserDetail(this.token);
        });
    }
    getUserDetail(token: string) {
        this.adminService
            .userDetail(token)
            .pipe(finalize(() => 
                {this.isLoading === true}
            ))
            .subscribe((response) => {
                let userInfo: UserInfo = response;
                this.userService.saveUserInfo(userInfo);
                this.isLoading === false;
                this.router.navigateByUrl('/dashboard');
            });
    }
}
