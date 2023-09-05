import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'xpas-section-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './section-header.component.html',
    host: {
        class: 'xpas-section-header',
    },
})
export class XpasSectionHeaderComponent {
    @Input() heading!: string;

    @Input()
    line?: string = 'false';

    @HostBinding('class.xpas-section-header-line')
    get addLine() {
        return coerceBooleanProperty(this.line);
    }
}
