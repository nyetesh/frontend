import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

export enum  KEY_PRESS_DEBONCE_TIME {
    TIME = 300,
}

@Injectable({ providedIn: 'root' })

export class KeyPressSearchService {
    typeAhead<T>(
        onChangeSubscriber: Observable<string>,
        actionSubscriber: (searchTerm: string) => Observable<T>
        ) {
        return onChangeSubscriber.pipe(
            debounceTime(KEY_PRESS_DEBONCE_TIME.TIME),
            distinctUntilChanged(),
            switchMap((searchTerm) => actionSubscriber(searchTerm)
                .pipe(catchError(() => of([])))
            ))
    }
}
