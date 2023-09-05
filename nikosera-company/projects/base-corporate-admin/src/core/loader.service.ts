import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoaderService {
    public subject = new Subject<boolean>();

    showLoader() {
        this.subject.next(true);
    }

    hideLoader() {
        this.subject.next(false);
    }
}