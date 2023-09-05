import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GenericResponse } from './response';
import { ApiConstants } from './constants/api-constant';

enum ApiEndpoint {
    CORPORATE_FEATURE = 'corporate-features',
}
export interface CorporateFeature {
    name: string;
    isActive: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class CorporateFeatureService {
    constructor(private http: HttpClient) {}

    getProfileFeatures(profileId: string): Observable<GenericResponse<CorporateFeature[]>> {
        return this.http.get<GenericResponse<CorporateFeature[]>>(ApiConstants.generateWebPath(ApiEndpoint.CORPORATE_FEATURE, profileId));
    }
}
