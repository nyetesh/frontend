import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from '../../constant/roles-constant';
import { environment } from '../../../environment/environment';


export interface LogInRequest {
    username: string;
    password: string;
}

export interface UserRoles {
    name: string;
    code: Roles;
    description: string;
}

export interface UserInfo {
    userType?: string;
    accountNumber?: string;
    authMode?: string;
    passwordFlag?: string
    token: string;
    branchName?: string;
    emailAddress?: string;
    name?: string;
    username?: string;
    roles?: UserRoles[];
}

/**
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    readonly WEB_PATH = environment.WEB_ENDPOINT;

    readonly AUTHENTICATION = 'auth/login';

    constructor(
        private http: HttpClient,
        //private apiConfig: ApiConfig
    ) { }

    /**
     * Authenticates the user.
     * @param request The login parameters.
     * @return The user credentials.
     */
    logIn(request: LogInRequest) {
        return this.http.post<UserInfo & Response>(
            this.WEB_PATH + '/' + this.AUTHENTICATION,
            request
        );
    }

}
