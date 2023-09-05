import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Response } from "../core/response";
import { environment } from "../../environment/environment";
import { Subject, map } from "rxjs";

const TOTAL_PAGES = 7;
export interface NotificationResponse {
    id: number;
    title: string;
    message: string;
    link: string;
    imagePath: string;
    date: string;
    hasUrl: string;
    seen: string;
}

export interface NotificationResponseList {
    responses: NotificationResponse[]
}

export interface NotificationStatusRequest {
    notificationId: number[];
    date: string;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    count = new Subject<number>();

    WEB_PATH = environment.WEB_ENDPOINT;
    readonly NOTIFICATION_LIST = 'notification/list';
    readonly NOTIFICATION_SEEN = 'notification/seen';
    

    constructor(
        private http: HttpClient
    ) { }

    get notifications() {
        return this.http.get<Response<NotificationResponseList>>(
            this.WEB_PATH + '/' + this.NOTIFICATION_LIST
        ).pipe(map((response) => response.data))
    }

    // loadNotifications(page: number, pageSize: number) {
    //     const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
    //     return this.http.get<Response<NotificationResponseList>>(
    //         this.WEB_PATH + '/' + this.NOTIFICATION_LIST
    //     ).pipe(map((response) => response.data.responses.splice(startIndex, pageSize)))
    // }

    loadNotifications(notificationList: NotificationResponse[], page: number, pageSize: number) : NotificationResponse[] {
        return notificationList.splice(0, pageSize);
    }

    markAsSeen(request : NotificationStatusRequest) {
        return this.http.post<Response>(
            this.WEB_PATH + '/' + this.NOTIFICATION_SEEN ,
            request
        )
    }
}

