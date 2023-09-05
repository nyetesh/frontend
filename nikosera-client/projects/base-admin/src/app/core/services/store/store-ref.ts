import { Observable, of, merge, Subscriber, Subject } from 'rxjs';
import { retry, tap, finalize, shareReplay, startWith, map } from 'rxjs/operators';


export interface StoreOptions {
    retry?: number;
    autheticated?: boolean;
    background?: boolean;
    location?: 'SESSION' | 'LOCAL';
}

export interface StoreRetriveOptions {
    force?: boolean;
}

export class StoreRef<T = any> {
    name: string;
    source: Observable<T>;
    options: StoreOptions = {
        retry: 3,
        autheticated: true,
        background: false,
    };


    private data?: any;
    private observer !: Subject<T>;
    private requesting = false;

    constructor(name: string, source: Observable<T>, options?: StoreOptions) {
        this.name = name;
        this.source = source;
        this.options = {
            ...this.options,
            ...options
        };
    }

    retrieve({ force }: StoreRetriveOptions = {}): Observable<T> {
        if (!this.source) {
            throw new Error('A source Observable must be provided');
        }
        if (!force) {
            if (this.options.location) {
                if (this.options.location === 'SESSION' && window.sessionStorage.getItem(this.name) != null) {
                    this.data = JSON.parse(window.sessionStorage.getItem(this.name) as string);
                   // log.debug("DATAAAAA" + this.data);
                } else if (this.options.location === 'LOCAL' && window.localStorage.getItem(this.name) != null) {
                    this.data = JSON.parse(window.localStorage.getItem(this.name) as string);
                    //log.debug("DATAAAAA LOCAL" + this.data);
                }
            }
        }
        this.requesting = true;
        this.observer = new Subject<T>();
        this.source.pipe(
            retry(this.options.retry),
            tap((data) => {
                this.data = data;
                if (this.options.location === 'SESSION') {
                    window.sessionStorage.setItem(this.name, JSON.stringify(this.data));
                } else if (this.options.location === 'LOCAL') {
                    window.localStorage.setItem(this.name, JSON.stringify(this.data));
                }
            }),
            finalize(() => {
                this.requesting = false;
                this.observer.complete();
            })
        ).subscribe((data) => this.observer.next(data), (error) => this.observer.error(error));
        if (this.data) {
            return this.observer.pipe(startWith(this.data));
        }
        return this.observer.asObservable();
    }

    clear() {
        this.data = null;
        if (this.options.location) {
            if (this.options.location === 'SESSION') {
                window.sessionStorage.removeItem(this.name);
            } else if (this.options.location === 'LOCAL') {
                window.localStorage.removeItem(this.name);
            }
        }
    }
}
