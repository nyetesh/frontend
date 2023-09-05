import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GenericResponse } from './response';
import { ApiConstants } from './constants/api-constant';

export interface AccountProfile {
    id: number;
    name: string;
    type: string;
    description: string;
}

export interface AccountSchemeCodeRequest {
    accountSchemeCodes: string[];
}

export interface CorporateFeature {
    label: string;
    name: string;
    isActive: boolean;
    children: CorporateFeature[];
}

export interface FeatureSetup {
    name: string;
    isActive: boolean;
}

enum ApiEndpoint {
    ACCOUNT_SCHEME_FEATURE = 'account-scheme-features',
}

@Injectable({
    providedIn: 'root',
})
export class AccountSchemeFeatureService {
    constructor(private http: HttpClient) {}

    getAccountSchemeFeatures(request: AccountSchemeCodeRequest): Observable<Map<string, FeatureSetup[]>> {
        return this.http
            .post<GenericResponse<Map<string, FeatureSetup[]>>>(ApiConstants.generateWebPath(ApiConstants.ACCOUNT_SCHEME_FEATURE), request)
            .pipe(map((response) => response.data));
    }
}
