import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenericResponse } from './response';
import { ApiConstants } from './constants/api-constant';

export interface CbsCustomerSearch {
    byCbsId: boolean;
    byAccountNumber: boolean;
    accountNumber?: string;
    cbsId?: string;
}

export interface CbsCustomerDetail {
    cbsId: string;
    name: string;
    phoneNumber: string;
    mobileNumber: string;
    emailAddress: string;
    address: string;
    secondaryAddress: string;
    dateOfBirth: string;
}

export interface CbsAccountDetail {
    accountNumber: string;
    accountHoldersName: string;
    accountProfileType: string;
    createdDate: Date;
    availableBalance: string;
    actualBalance: string;
    interestRate: string;
    accuredInterest: string;
    branchCode: string;
    currencyAbbreviation: string;
    currencyCode: string;
    accountHoldersAddress: string;
    cbsId: string;
    isPrimaryAccount: boolean;
    lienAmount: string;
    maturityDate: Date;
    sanctionLimit: string;

    accountType?: string;
    abbreviatedAccountType?: string;
    accountName?: string;
    renewDate?: string;
    expiryDate?: string;
}

export interface AccountRequest {
    accountNumber?: string;
    cbsId?: string;
}

export interface LinkableAccounts {
    linkableAccounts: CbsAccountDetail[];
    unlinkableAccounts: UnlinkedAccount[];
}

export interface UnlinkedAccount {
    account: CbsAccountDetail;
    reason: string[];
}

enum ApiEndpoint {
    CBS_CUSTOMER = 'cbs/customers',
    CBS_ACCOUNT = 'cbs/accounts',
    BY_ACCOUNT_NUMBER = `${CBS_CUSTOMER}/account-number`,
    BY_CBS_ID = `${CBS_CUSTOMER}/cbs-id`,
    LINKABLE_ACCOUNTS = `${CBS_ACCOUNT}/link-accounts`,
    ACCOUNT_DETAIL = `${CBS_ACCOUNT}/detail`,
}

@Injectable({
    providedIn: 'root',
})
export class CbsService {
    constructor(private http: HttpClient) {}

    getCustomerByCbsId(cbsId: string): Observable<CbsCustomerDetail> {
        return this.http
            .post<GenericResponse<CbsCustomerDetail>>(ApiConstants.generateWebPath(ApiEndpoint.BY_CBS_ID), cbsId)
            .pipe(map((response) => response.data));
    }

    getCustomerByAccountNumber(accountNumber: string): Observable<CbsCustomerDetail> {
        return this.http
            .post<GenericResponse<CbsCustomerDetail>>(ApiConstants.generateWebPath(ApiEndpoint.BY_ACCOUNT_NUMBER), accountNumber)
            .pipe(map((response) => response.data));
    }

    getAccountsByCbsId(cbsId: string): Observable<CbsAccountDetail[]> {
        return this.http
            .post<GenericResponse<CbsAccountDetail[]>>(
                ApiConstants.generateWebPath(ApiConstants.CBS, ApiConstants.ACCOUNT, ApiConstants.CBS_ID),
                cbsId
            )
            .pipe(map((response) => response.data));
    }

    getAccountByAccountNumber(accountNumber: string): Observable<CbsAccountDetail> {
        return this.http
            .post<GenericResponse<CbsAccountDetail>>(
                ApiConstants.generateWebPath(ApiConstants.CBS, ApiConstants.ACCOUNT, ApiConstants.ACCOUNT_NUMBER),
                accountNumber
            )
            .pipe(map((response) => response.data));
    }

    getLinkableAccounts(request: AccountRequest): Observable<LinkableAccounts> {
        return this.http
            .post<GenericResponse<LinkableAccounts>>(ApiConstants.generateWebPath(ApiEndpoint.LINKABLE_ACCOUNTS), request)
            .pipe(map((response) => response.data));
    }

    getAccountDetails(accountNumber: string): Observable<CbsAccountDetail> {
        return this.http
            .post<GenericResponse<CbsAccountDetail>>(ApiConstants.generateWebPath(ApiEndpoint.ACCOUNT_DETAIL), accountNumber)
            .pipe(map((response) => response.data));
    }
}
