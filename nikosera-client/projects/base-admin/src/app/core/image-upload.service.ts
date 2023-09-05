import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Response } from "./response";
import { environment } from "../../environment/environment";



export interface ImageResponse {
    fileNames: string[];
}
@Injectable({
    providedIn: 'root'
})
export class ImageUploaderService {
    readonly SINGLE_UPLOAD = 'admin/upload/single';

    WEB_PATH = environment.WEB_ENDPOINT;

    constructor(
        private http: HttpClient,
        //private apiConfig: ApiConfig
    ) { }
    
    singleImageUpload(file: File, type: string) {
        const formData = new FormData();
        console.log("Images :" + file);
        formData.append('files', file);
        return this.http.post<Response<ImageResponse>>((
            // this.apiConfig.generateWebPath(this.SINGLE_UPLOAD, type), formData)
            this.WEB_PATH + '/' + this.SINGLE_UPLOAD + '/' +type),formData)
            .pipe(map((response) => response));
    }
}