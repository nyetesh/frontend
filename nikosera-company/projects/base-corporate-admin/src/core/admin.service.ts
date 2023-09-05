import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { environment } from '../environments/environment';

export interface Response<T = void> {
    code: string;
    success: boolean;
    data: T;
    message: string;
}

export interface LogInRequest {
    username: string;
    password: string;
}

export interface UserRoles {
    name: string;
    code?: string;
    description: string;
}
export interface UserInfo {
    userType?: string;
    accountNumber?: string;
    authMode?: string;
    passwordFlag?: string;
    token: string;
    branchName?: string;
    emailAddress?: string;
    name?: string;
    username?: string;
    roles?: UserRoles[];
}

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    WEB_PATH = environment.apiEndpoint;
    AUTH_SERVER_PATH = environment.authServerEndpoint;

    readonly CREATE = 'admin/create';
    readonly SEARCH = 'admin/search';
    readonly DETAIL = 'admin';
    readonly MODIFY = 'admin/modify';
    readonly BLOCKED_LIST = 'admin-unblock/search';
    readonly UNBLOCK = 'admin-unblock';
    readonly UNBLOCK_PENDING_LIST = 'admin-unblock-approve/search';
    readonly UNBLOCK_APPROVE = 'admin-unblock-approve/approve';
    readonly UNBLOCK_REJECT = 'admin-unblock-approve/reject';
    readonly WSO2_ADMIN_DETAIL = 'wso2/admin';

    constructor(private http: HttpClient) {}

    userDetail(token: string) {
        const headers = new HttpHeaders({
            Authorization: token,
        });

        return this.http.get<UserInfo & Response>(
            this.AUTH_SERVER_PATH + '/' + this.WSO2_ADMIN_DETAIL
        );
    }
}
