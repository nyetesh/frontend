import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchQueryParamMapper } from './search-query-param-mapper';
import { Page } from './page';
import { Observable, map } from 'rxjs';
import { PaginatedResponse } from './paginatedResponse';
import { GenericResponse } from './response';
import { ApiConstants } from './constants/api-constant';
import { CorporateHouse } from './corporate-house.service';
import { Status } from './model/status';
import { StateChangeRequest } from './model/state-change-request';

export interface CorporateUser {
    id: number;
    name: string;
    corporateHouse: CorporateHouse;
    userName: string;
    status: Status;
}

export interface UserSetup {
    name: string;
    emailAddress: string;
    resident: boolean;
    mobileNumber: string;
    sex: string;
    address: string;
    dateOfBirth: Date;
}
export interface UserAccountSetup {
    id: number;
    isActive: boolean;
}

export interface UserRoleSetup {
    name: string;
    isActive: boolean;
}

export interface CreateUserRequest {
    username: string;
    credentialDeliveryChannel: string;
    userSetup: UserSetup;
    userRoleSetup: UserRoleSetup[];
    userAccountSetup: UserAccountSetup[];
    isRootUser: boolean;
    corporateHouseId: number;
}

enum ApiEndpoint {
    CORPORATE_USERS = 'corporate-users',
    CREATE = `${CORPORATE_USERS}/create`,
    BLOCK = `${CORPORATE_USERS}/block`,
    UNBLOCK = `${CORPORATE_USERS}/unblock`,
    DELETE = `${CORPORATE_USERS}/delete`,
}

@Injectable({
    providedIn: 'root',
})
export class CorporateUserService {
    constructor(private http: HttpClient, private searchQueryParamMapper: SearchQueryParamMapper) {}

    getCorporateUsers(page: Page, searchFilters: any): Observable<PaginatedResponse<CorporateUser[]>> {
        const params = this.searchQueryParamMapper.getSearchRequest(page, searchFilters);
        return this.http
            .post<GenericResponse<PaginatedResponse<CorporateUser[]>>>(ApiConstants.generateWebPath(ApiEndpoint.CORPORATE_USERS), params)
            .pipe(map((response) => response.data));
    }

    create(createUserRequest: CreateUserRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.CREATE), createUserRequest);
    }

    block(blockRequest: StateChangeRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.BLOCK), blockRequest);
    }

    unblock(unblockRequest: StateChangeRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.UNBLOCK), unblockRequest);
    }

    delete(deleteRequest: StateChangeRequest): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(ApiConstants.generateWebPath(ApiEndpoint.DELETE), deleteRequest);
    }
}
