import {
    Directive,
    HostBinding,
    Input,
} from '@angular/core';

@Directive({
    selector: 'xpas-container[size]',
    standalone: true,
    host: {
        class: 'xpas-container',
    },
})
export class XpasContainer {
    @Input({ required: true }) size!: string;

    @HostBinding('class.xpas-container--medium')
    get medium() {
        return this.size === 'medium';
    }
}
