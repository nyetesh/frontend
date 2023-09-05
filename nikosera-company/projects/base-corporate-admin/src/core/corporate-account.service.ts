import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Status } from './model/status';
import { GenericResponse } from './response';
import { ApiConstants } from './constants/api-constant';

export interface CorporateAccount {
    id: number;
    isPrimary: boolean;
    accountNumber: string;
    accountScheme: AccountScheme;
    accountHoldersName: string;
    currencyCode: string;
    isOperable: boolean;
    status: Status;
}

export interface CorporateHouseAccount {
    mainAccounts: CorporateAccount[];
    linkedAccounts: CorporateAccount[];
}

export interface AccountScheme {
    id: string;
    name: string;
    description: string;
    code: string;
    status: Status;
}

enum ApiEndpoint {
    CORPORATE_ACCOUNTS = 'corporate-accounts',
}

@Injectable({
    providedIn: 'root',
})
export class CorporateAccountService {
    constructor(private http: HttpClient) {}

    getAccounts(id: number): Observable<CorporateHouseAccount> {
        return this.http
            .get<GenericResponse<CorporateHouseAccount>>(ApiConstants.generateWebPath(ApiEndpoint.CORPORATE_ACCOUNTS, id.toString()))
            .pipe(map((response) => response.data));
    }
}
