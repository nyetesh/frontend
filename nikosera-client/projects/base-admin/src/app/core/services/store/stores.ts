import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreOptions, StoreRef } from './store-ref';

let uniqueId = 0;

@Injectable({
    providedIn: 'root'
})
export class Stores {
    private stores: StoreRef[] = [];

    register<T>(source: Observable<T>, options?: StoreOptions, name?: string): StoreRef<T> {
        if (options && options.location && !name) {
            throw new Error('A name must be provided to store the data.');
        }
        console.log("NAME:" + name);
        const storeRef = new StoreRef<T>(name || `store-${uniqueId++}`, source, options);
        this.stores.push(storeRef);
        return storeRef;
    }

    clear(filter: (storeRef: StoreRef) => boolean = () => true) {
        this.stores.filter(filter).forEach((store) => {
            store.clear();
        });
    }
}