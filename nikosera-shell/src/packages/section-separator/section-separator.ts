import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: 'section[gap]',
    standalone: true,
    host: {
        class: 'xpas-section-separator',
    },
})
export class XpasSectionSeparator {
    @Input({ required: true }) gap!: string;

    @Input()
    line?: string = 'false';

    @HostBinding('class.xpas-section-line')
    get addLine() {
        return coerceBooleanProperty(this.line);
    }

    @HostBinding('class.xpas-section-separator--micro')
    get micro() {
        return this.gap === 'micro';
    }

    @HostBinding('class.xpas-section-separator--tiny')
    get tiny() {
        return this.gap === 'tiny';
    }

    @HostBinding('class.xpas-section-separator--small')
    get small() {
        return this.gap === 'small';
    }

    @HostBinding('class.xpas-section-separator--medium')
    get medium() {
        return this.gap === 'medium';
    }

    @HostBinding('class.xpas-section-separator--large')
    get large() {
        return this.gap === 'large';
    }

    @HostBinding('class.xpas-section-separator--giant')
    get giant() {
        return this.gap === 'giant';
    }
}
