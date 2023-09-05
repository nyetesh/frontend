import {
    Directive,
    HostBinding,
    Input
} from '@angular/core';
import { NbComponentSize } from '@nebular/theme';

@Directive({
    selector: 'scl-table-text[size]',
    standalone: true,
    host: {
        class: 'scl-table-text',
    },
})
export class SclTableText {
    @Input({ required: true }) size!: NbComponentSize;

    @HostBinding('class.scl-table-text--tiny')
    get tiny() {
        return this.size === 'tiny';
    }

    @HostBinding('class.scl-table-text--small')
    get small() {
        return this.size === 'small';
    }

    @HostBinding('class.scl-table-text--medium')
    get medium() {
        return this.size === 'medium';
    }

    @HostBinding('class.scl-table-text--large')
    get large() {
        return this.size === 'large';
    }

    @HostBinding('class.scl-table-text--giant')
    get giant() {
        return this.size === 'giant';
    }
}
