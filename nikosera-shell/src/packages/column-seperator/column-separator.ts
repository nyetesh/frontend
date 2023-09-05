import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[column-separator]',
    standalone: true,
    host: {
        class: 'xpas-column-separator',
    },
})
export class XpasColumnSeparator {
    @Input() gap!: string;

    @HostBinding('class.xpas-column-separator--nano')
    get nano() {
        return this.gap === 'nano';
    }

    @HostBinding('class.xpas-column-separator--micro')
    get micro() {
        return this.gap === 'micro';
    }

    @HostBinding('class.xpas-column-separator--tiny')
    get tiny() {
        return this.gap === 'tiny';
    }

    @HostBinding('class.xpas-column-separator--small')
    get small() {
        return this.gap === 'small';
    }

    @HostBinding('class.xpas-column-separator--medium')
    get medium() {
        return this.gap === 'medium';
    }

    @HostBinding('class.xpas-column-separator--large')
    get large() {
        return this.gap === 'large';
    }

    @HostBinding('class.xpas-column-separator--giant')
    get giant() {
        return this.gap === 'giant';
    }
}