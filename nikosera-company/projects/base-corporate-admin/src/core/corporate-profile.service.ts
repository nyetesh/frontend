import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { AssignFeature } from '@shared/corporate-features';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConstants } from './constants/api-constant';
import { Status } from './model/status';
import { Page } from './page';
import { PaginatedResponse } from './paginatedResponse';
import { GenericResponse } from './response';
import { SearchQueryParamMapper } from './search-query-param-mapper';
import { SearchFilter } from './model/search-filter-request';
import { StateChangeRequest } from './model/state-change-request';

enum ApiEndpoint {
    CORPORATE_PROFILE = 'corporate-profiles',
    LIST = CORPORATE_PROFILE,
    CREATE = `${CORPORATE_PROFILE}/create`,
    UNBLOCK = `${CORPORATE_PROFILE}/unblock`,
    BLOCK = `${CORPORATE_PROFILE}/block`,
}

export interface CorporateProfile {
    id: number;
    name: string;
    description: string;
    maxUsersAllowed: number;
    status: Status;
}

export interface ChargeSetup {
    registrationCharge: number;
    renewCharge: number;
    renewInterval: number;
    freeAccessPeriod: number;
}

export interface FeatureSetup {
    name: string;
    isActive: boolean;
    txnLimits?: TxnLimitSetup[];
}

export interface TxnLimitSetup {
    name: string;
    value: string;
}

export interface CreateCorporateProfileRequest {
    name: string;
    description: string;
    maxAllowedUsers: number;
    corporateHouseCharge: ChargeSetup;
    features: FeatureSetup[];
}

@Injectable({
    providedIn: 'root',
})
export class CorporateProfileService {
    constructor(private http: HttpClient, private searchQueryParamMapper: SearchQueryParamMapper) {}

    getAll(page: Page, searchFilters: SearchFilter[] = []): Observable<PaginatedResponse<CorporateProfile[]>> {
        const params = this.searchQueryParamMapper.getSearchRequest(page, searchFilters);
        return this.http
            .post<GenericResponse<PaginatedResponse<CorporateProfile[]>>>(ApiConstants.generateWebPath(ApiEndpoint.LIST), params)
            .pipe(map((response) => response.data));
    }

    getCorporateProfiles(page: Page, searchFilters: any): Observable<PaginatedResponse<CorporateProfile[]>> {
        const params = this.searchQueryParamMapper.getSearchRequest(page, searchFilters);
        console.log(params);
        return this.http
            .post<GenericResponse<PaginatedResponse<CorporateProfile[]>>>(ApiConstants.generateWebPath(ApiEndpoint.LIST), params)
            .pipe(map((response) => response.data));
    }

    // getCorporateProfileById(id: number): Observable<CorporateProfileDetail> {
    //     return this.http
    //         .get<GenericResponse<CorporateProfileDetail>>(ApiConstants.generateWebPath(ApiConstants.CORPORATE_PROFILES, id.toString()))
    //         .pipe(map((response) => response.data));
    // }

    create(createCorporateProfileRequest: CreateCorporateProfileRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.CREATE), createCorporateProfileRequest);
    }

    // editCorporateProfile(editCorporateProfileRequest: EditCorporateProfileRequest): Observable<GenericResponse> {
    //     return this.http.post<GenericResponse>(
    //         ApiConstants.generateWebPath(ApiConstants.CORPORATE_PROFILES, ApiConstants.EDIT),
    //         editCorporateProfileRequest
    //     );
    // }

    // deleteCorporateProfile(deleteCorporateProfileRequest: Remark): Observable<GenericResponse> {
    //     return this.http.post<GenericResponse>(
    //         ApiConstants.generateWebPath(ApiConstants.CORPORATE_PROFILES, ApiConstants.DELETE),
    //         deleteCorporateProfileRequest
    //     );
    // }

    unblock(unblockCorporateProfileRequest: StateChangeRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.UNBLOCK), unblockCorporateProfileRequest);
    }

    block(blockCorporateProfileRequest: StateChangeRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.BLOCK), blockCorporateProfileRequest);
    }

    // approveCorporateProfile(approveRequest: ApproveRequest): Observable<GenericResponse> {
    //     return this.http.post<GenericResponse>(
    //         ApiConstants.generateWebPath(ApiConstants.CORPORATE_PROFILES, ApiConstants.APPROVE),
    //         approveRequest
    //     );
    // }

    // disapproveCorporateProfile(disapproveRequest: Remark): Observable<GenericResponse> {
    //     return this.http.post<GenericResponse>(
    //         ApiConstants.generateWebPath(ApiConstants.CORPORATE_PROFILES, ApiConstants.DISAPPROVE),
    //         disapproveRequest
    //     );
    // }

    // getRecentCorporateProfileHistory(id: number): Observable<CorporateProfileHistory> {
    //     return this.http
    //         .get<GenericResponse<CorporateProfileHistory>>(
    //             ApiConstants.generateWebPath(ApiConstants.CORPORATE_PROFILES, ApiConstants.RECENT_HISTORY, id.toString())
    //         )
    //         .pipe(map((response) => response.data));
    // }
}
