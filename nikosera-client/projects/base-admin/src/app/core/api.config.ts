import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiConfig {
    readonly WEB_PATH = environment.WEB_ENDPOINT;

    generateWebPath(...sections: string[]) {
        return sections.reduce((path, section) => `${path}/${section}`, this.WEB_PATH);
    }
}
