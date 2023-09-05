import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component,  HostBinding, Input, inject } from '@angular/core';
import { NbComponentOrCustomStatus, NbStatusService } from '@nebular/theme';

@Component({
    selector: 'xpas-account-card',
    templateUrl: './account-card.component.html',
    standalone: true,
    host: {
        class: 'xpas-account-card'
    }
})
export class XpasAccountCardComponent {

        @Input()
    ghost?: string = 'false';

    @Input()
    status: NbComponentOrCustomStatus = 'basic';

    @HostBinding('class.xpas-account-card--primary')
    get primary() {
        return this.status === 'primary';
    }

    @HostBinding('class.xpas-account-card--info')
    get info() {
        return this.status === 'info';
    }

    @HostBinding('class.xpas-account-card--success')
    get success() {
        return this.status === 'success';
    }

    @HostBinding('class.xpas-account-card--warning')
    get warning() {
        return this.status === 'warning';
    }

    @HostBinding('class.xpas-account-card--danger')
    get danger() {
        return this.status === 'danger';
    }

    @HostBinding('class.xpas-account-card--basic')
    get basic() {
        return this.status === 'basic';
    }

    @HostBinding('class.xpas-account-card--ghost')
    get ghostClass() {
        return coerceBooleanProperty(this.ghost);
    }

    @HostBinding('class')
    get additionalClasses(): string[] {
        if (typeof(this.status) === 'string' && this.status.length) {
            return [`xpas-account-card--${this.status}`];
        }
        return [];
    }
}
