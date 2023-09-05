import { Response, SearchResponse } from "../../../core/response";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "projects/base-admin/src/environment/environment";
import { Filter } from "../../../core/request";

export interface EmailTemplateRequest {
    name: string;
    type: string;
    subject: string;
    template: string;
    active?: string;
}

export interface EmailTemplateDetail {
    id: number;
    name: string;
    type: string;
    subject: string;
    template: string;
    active: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmailTemplateService {
    WEB_PATH = environment.WEB_ENDPOINT;

    readonly CREATE = 'email-template/create';
    readonly MODIFY = 'email-template/modify';
    readonly DETAIL = 'email-template';
    readonly SEARCH = 'email-template/search'

    constructor(
        private http: HttpClient
    ) {

    }

    createEmailTemplate(request: EmailTemplateRequest) {
        return this.http.post<Response>(
            this.WEB_PATH + '/' + this.CREATE,
            request
        );
    }

    modifyEmailTemplate(request: EmailTemplateRequest, eid: string) {
        return this.http.post<Response>(
            this.WEB_PATH + '/' + this.MODIFY + `/${eid}`,
            request
        );
    }

    detail(eid: string) {
        return this.http.get<Response<EmailTemplateDetail>>(
            this.WEB_PATH + '/' + this.DETAIL + `/${eid}`
        );
    }

    search(request: Filter) {
        return this.http.post<Response<SearchResponse<EmailTemplateDetail[]>>>(
            this.WEB_PATH + '/' + this.SEARCH,
            request
        );
    }
}