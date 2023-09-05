import { Directive, HostBinding, Input, inject } from '@angular/core';
import { NbComponentOrCustomStatus, NbStatusService } from '@nebular/theme';

@Directive({
    selector: 'scl-badge',
    standalone: true,
    host: {
        class: 'scl-badge'
    }
})
export class SclBadge {
    private statusService: NbStatusService = inject(NbStatusService);

    @Input()
    status: NbComponentOrCustomStatus = 'basic';

    @HostBinding('class.scl-badge--primary')
    get primary() {
        return this.status === 'primary';
    }

    @HostBinding('class.scl-badge--info')
    get info() {
        return this.status === 'info';
    }

    @HostBinding('class.scl-badge--success')
    get success() {
        return this.status === 'success';
    }

    @HostBinding('class.scl-badge--warning')
    get warning() {
        return this.status === 'warning';
    }

    @HostBinding('class.scl-badge--danger')
    get danger() {
        return this.status === 'danger';
    }

    @HostBinding('class.scl-badge--basic')
    get basic() {
        return this.status === 'basic';
    }

    @HostBinding('class.scl-badge--control')
    get control() {
        return this.status === 'control';
    }

    @HostBinding('class')
    get additionalClasses(): string[] {
        if (typeof(this.status) === 'string' && this.status.length) {
            return [`scl-badge--${this.status}`];
        }
        return [];
    }
}
