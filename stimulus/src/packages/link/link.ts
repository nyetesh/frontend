import {
    Directive,
    HostBinding,
    Input,
    inject,
} from '@angular/core';
import { NbComponentOrCustomStatus, NbStatusService } from '@nebular/theme';

@Directive({
    selector: '[sclLink]',
    standalone: true,
    host: {
        class: 'scl-link',
    },
})
export class SclLink {
    private statusService: NbStatusService = inject(NbStatusService);

    @Input()
    size!: string;

    @HostBinding('class.scl-link--small')
    get small() {
        return this.size === 'small';
    }

    @HostBinding('class.scl-link--medium')
    get medium() {
        return this.size === 'medium';
    }

    @HostBinding('class.scl-link--large')
    get large() {
        return this.size === 'large';
    }

    @Input()
    status: NbComponentOrCustomStatus = 'basic';

    @HostBinding('class.scl-link--basic')
    get basic() {
        return this.status === 'basic';
    }

    @HostBinding('class.scl-link--primary')
    get primary() {
        return this.status === 'primary';
    }

    @HostBinding('class.scl-link--danger')
    get danger() {
        return this.status === 'danger';
    }

    @HostBinding('class.scl-link--info')
    get info() {
        return this.status === 'info';
    }

    @HostBinding('class.scl-link--success')
    get success() {
        return this.status === 'success';
    }

    @HostBinding('class.scl-link--warning')
    get warning() {
        return this.status === 'warning';
    }
}
