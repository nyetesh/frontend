import { Injectable } from "@angular/core";


export interface DataObject {
    [key: string]: any | DataObject;
}

export interface ResponseData {
    oldData: DataObject;
    newData: DataObject;
}
@Injectable({
    providedIn: 'root'
})
export class PendingChangesConnector {


    constructor() { }

    generateResponse(newData: DataObject, oldData: DataObject): ResponseData {
        const response: ResponseData = {
            oldData: {},
            newData: {}
        };
        for (const key in newData) {
            
            if (newData.hasOwnProperty(key) && oldData.hasOwnProperty(key)) {
                response.oldData[key] = oldData[key];
                response.newData[key] = newData[key];
            }
        }
        console.log("Response", response)
        return response;
    }
}