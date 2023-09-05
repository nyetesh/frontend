import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SclText } from '../typography/typography';

@Component({
    selector: 'scl-column-text',
    standalone: true,
    imports: [CommonModule, SclText],
    templateUrl: './column-text.html',
    host: {
        class: 'scl-column-text',
    },
})
export class SclColumnText {
    @Input() heading!: string;
    @Input() textAlign?: string;

    @HostBinding('class.scl-column-text--right')
    get textAlignRight() {
        return this.textAlign === 'right';
    }

    @HostBinding('class.scl-column-text--left')
    get textAlignLeft() {
        return this.textAlign === 'left';
    }

    @HostBinding('class.scl-column-text--center')
    get textAlignCenter() {
        return this.textAlign === 'center';
    }
}
