import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CorporateFeature } from './account-scheme-feature.service';
import { ApiConstants } from './constants/api-constant';
import { CorporateProfile } from './corporate-profile.service';
import { Audit } from './model/audit';
import { SearchFilter } from './model/search-filter-request';
import { StateChangeRequest } from './model/state-change-request';
import { Status } from './model/status';
import { Page } from './page';
import { PaginatedResponse } from './paginatedResponse';
import { EditCorporateHouseRequest } from './request-mapper/edit-corporate-house-request-mapper';
import { GenericResponse } from './response';
import { SearchQueryParamMapper } from './search-query-param-mapper';
import { CreateCorporateHouseRequest } from './request-mapper/create-corporate-house-request-mapper';

export interface CorporateHouse {
    id: number;
    name: string;
    cbsId: number;
    accountNumber: string | number;
    address: string;
    email: string;
    phoneNumber: string;
    pan: string;
    corporateProfile: CorporateProfile;
    status: Status;
}

export interface AssignFeature {
    id?: number;
    name?: string;
    isActive: boolean;
}

export interface CorporateHouseDetail {
    accountFeatures: AccountFeature[];
    address: string;
    corporateProfile: CorporateProfile;
    cbsId: string;
    emailAddress: string;
    id: number;
    name: string;
    pan: string;
    phoneNumber: string;
    status: Status;
    createApproveAudit: Audit;
    createAudit: Audit;
    modifyApproveAudit: Audit;
    modifyAudit: Audit;
}

export interface AccountFeature {
    account: Account;
    corporateFeatures: CorporateFeature[];
}

export interface AccountScheme {
    id: string;
    name: string;
    description: string;
    code: string;
    status: Status;
}
export interface Account {
    accountHoldersName: string;
    accountNumber: string;
    accountScheme: AccountScheme;
    branch: Branch;
    currencyAbbreviation: string;
    id: number;
    isDependent: boolean;
    isOperable: boolean;
    isPrimary: boolean;
}

export interface Branch {
    id: number;
    name: string;
    code: string;
    isMainBranch: boolean;
    status: Status;
}

export enum ApiEndpoint {
    CORPORATE_HOUSE = 'corporate-houses',
    CREATE = `${CORPORATE_HOUSE}/create`,
    BLOCK = `${CORPORATE_HOUSE}/block`,
    DELETE = `${CORPORATE_HOUSE}/delete`,
    UNBLOCK = `${CORPORATE_HOUSE}/unblock`,
    EDIT = `${CORPORATE_HOUSE}/edit`,
}

@Injectable({
    providedIn: 'root',
})
export class CorporateHouseService {
    constructor(private http: HttpClient, private searchQueryParamMapper: SearchQueryParamMapper) {}

    getCorporateHouses(page: Page, searchFilters: SearchFilter[] = []): Observable<PaginatedResponse<CorporateHouse[]>> {
        const params = this.searchQueryParamMapper.getSearchRequest(page, searchFilters);

        return this.http
            .post<GenericResponse<PaginatedResponse<CorporateHouse[]>>>(ApiConstants.generateWebPath(ApiEndpoint.CORPORATE_HOUSE), params)
            .pipe(map((response) => response.data));
    }

    create(createRequest: CreateCorporateHouseRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.CREATE), createRequest);
    }

    block(blockRequest: StateChangeRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.BLOCK), blockRequest);
    }

    delete(deleteRequest: StateChangeRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.DELETE), deleteRequest);
    }

    unblock(unblockRequest: StateChangeRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.UNBLOCK), unblockRequest);
    }
    
    getCorporateHouseById(id: number): Observable<CorporateHouseDetail> {
        return this.http
            .get<GenericResponse<CorporateHouseDetail>>(ApiConstants.generateWebPath(ApiConstants.CORPORATE_HOUSES, id.toString()))
            .pipe(map((response) => response.data));
    }

    editCorporateHouse(editRequest: EditCorporateHouseRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.EDIT), editRequest);
    }
}
