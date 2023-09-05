import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbDialogRef, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'xpas-image-info',
    standalone: true,
    imports: [CommonModule, NbButtonModule, NbIconModule],
    templateUrl: './image-info.component.html',
    host: {
        class: 'xpas-image-info',
    },
})
export class XpasImageInfo {

    @Input() src!: string;
    @Input() alt?: string;
    @Input() srcset?: string;
    @Input() description!: string;
}
