import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SclText } from '../../typography/typography';

@Component({
    selector: 'scl-button-group-header',
    templateUrl: './button-group-header.html',
    host: {
        class: 'scl-button-group-header',
    },
    hostDirectives: [
        {
            directive: SclText,
            inputs: ['textType', 'weight'],
        },
    ],
    standalone: true,
    imports: [CommonModule],
})
export class SclButtonGroupHeader {
    @Input() heading!:string;
}
