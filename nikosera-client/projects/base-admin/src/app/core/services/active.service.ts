import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "projects/base-admin/src/environment/environment";
import { map } from "rxjs";
import { Response } from "../response";

export interface StatusOptions {
    label: string;
    value: string;
}

export interface StatusResponse {
    statusList: StatusOptions[];
}

@Injectable({
    providedIn: 'root',
})

export class StatusService {
    readonly DETAIL = 'status';

    WEB_PATH = environment.WEB_ENDPOINT;

    constructor(private http: HttpClient) { }

    get statusOption() {
        return this.http
            .get<Response<StatusResponse>>(
                this.WEB_PATH + '/' + this.DETAIL)
            .pipe(map((response) => response.data));
    }
}