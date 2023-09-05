import { Injectable } from "@angular/core";
import { InitialDataService } from "./initial.data.service";

@Injectable({
    providedIn: 'root'
})
export class InitialDataConnector {

    constructor(private initialDataService: InitialDataService) { }

    get getInitialData() {
        return this.initialDataService.getInitialData;
    }

    get getSuggestedReplies() {
        return this.initialDataService.getSuggestedReplies;
    }

    get getWebMessageFormat() {
        return this.initialDataService.getWebMessageFormat;
    }
}