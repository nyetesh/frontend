import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { StoreRef, StoreRetriveOptions } from '../store/store-ref';
import { Response } from '../../response';
import { Stores } from '../store/stores';
import { environment } from 'projects/base-admin/src/environment/environment';


export interface InitialData {
    bankLogo: String;
    bankName: String;
    bankCode: String;
    authMode: String;
    adminPasswordMode: String;
    bankServiceImagePath: String;
    allowMultipleAdminLogin: String;
    customerRegistrationIdentifierType: String;
    allowThirdPartyAccount: String;
    emailRequiredInRegistration: String;
    userNameRequiredFromCbs: String;
    commissionSlabRangeNote: String;
    commissionSlabChargeNote: String;
    centralTxnLimitModuleProfile: String;
    customerMenuGateType: string;
    allowInternationalUserRegistration:string;

}

export interface SuggestedReplyDetail {
    suggestedReply: SuggestedReplyType[];
}

export interface SuggestedReplyType {
    menuCode: string;
    suggestedReplies: SuggestedReply[];
}

export interface SuggestedReply {
    message: string
}

export interface WebMessageDetail {
    menuCode: string;
    message: string;
    eventType: string;
    title: string;
}

export interface WebMessage {
    messages: WebMessageDetail[];
}

@Injectable({
    providedIn: 'root'
})
export class InitialDataService {
    readonly INITIAL_DATA = 'initial/data';
    readonly SUGGESTED_REPLY = 'initial/data/suggested-reply';
    readonly WEB_MESSAGE_FORMAT = 'initial/data/message';

    storeRetrieveOtp !: StoreRetriveOptions;


    get getInitialData() {
        return this.initialDataStoreRef.retrieve();
    }

    get getSuggestedReplies() {
        return this.suggestedRepliesStoreRef.retrieve();
    }

    get getWebMessageFormat() {
        return this.webMessageFormatStoreRef.retrieve();
    }

    private initialDataStoreRef !: StoreRef<InitialData>;
    private suggestedRepliesStoreRef !: StoreRef<SuggestedReplyDetail>;
    private webMessageFormatStoreRef !: StoreRef<WebMessage>;

    readonly WEB_PATH = environment.WEB_ENDPOINT;
    constructor(
        private http: HttpClient,
        private stores: Stores
    ) {
        const initialDataRespone = this.http.get<Response<InitialData>>(
            this.WEB_PATH + '/' + this.INITIAL_DATA,
        ).pipe(map((response) => response.data));
        this.initialDataStoreRef = this.stores.register(initialDataRespone, { location: 'SESSION' }, 'initialData');

        const suggestedReplyResponse = this.http.get<Response<SuggestedReplyDetail>>(
            this.WEB_PATH + '/' + this.SUGGESTED_REPLY,
        ).pipe(map((response) => response.data));
        this.suggestedRepliesStoreRef = this.stores.register(suggestedReplyResponse, { location: 'SESSION' }, 'suggestedReplies');

        const webMessageResponse = this.http.get<Response<WebMessage>>(
            this.WEB_PATH + '/' + this.WEB_MESSAGE_FORMAT,
        ).pipe(map((response) => response.data));
        this.webMessageFormatStoreRef = this.stores.register(webMessageResponse, { location: 'SESSION' }, 'webMessageFormat');
    }
}