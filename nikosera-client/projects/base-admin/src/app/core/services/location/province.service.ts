import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Response, SearchResponse } from '../../response';
import { Filter } from '../../request';
import { ApiConfig } from '../../api.config';

export interface ProvinceCreateRequest {
  provinceName: string;
  provinceCode: string;
}

export interface ProvinceModifyRequest {
  provinceName: string;
  provinceCode: string;
  active: string;
}

export interface ProvinceDetail {
  eid:string;
  provinceId: number;
  provinceName: string;
  provinceCode: string;
  districts: DistrictDetail[];
  active: string;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
}

export interface DistrictDetail {
  districtName: string;
}

export interface Provinces {
  provinceList: ProvinceDetail[];
}

@Injectable({
  providedIn: 'root',
})

export class ProvinceService {
  readonly CREATE = 'province/create';
  readonly MODIFY = 'province/modify';
  readonly DETAIL = 'province';
  readonly SEARCH = 'province/search';

  constructor(private http: HttpClient, private apiConfig: ApiConfig) {}

  create(request: ProvinceCreateRequest) {
    return this.http.post<Response>(
      this.apiConfig.generateWebPath(this.CREATE),
      request
    );
  }

  modify(request: ProvinceModifyRequest, eid: string) {
    return this.http.post<Response<Response>>(
      this.apiConfig.generateWebPath(this.MODIFY + `/${eid}`),
      request
    );
  }

  search(request: Filter) {
    return this.http.post<Response<SearchResponse<ProvinceDetail[]>>>(
      this.apiConfig.generateWebPath(this.SEARCH),
      request
    );
  }

  detail(eid: string) {
    return this.http.get<Response<ProvinceDetail>>(
      this.apiConfig.generateWebPath(this.DETAIL + `/${eid}`)
    );
  }

  get provinces() {
    return this.http
      .get<Response<Provinces>>(this.apiConfig.generateWebPath(this.DETAIL))
      .pipe(map((response) => response.data));
  }
}
