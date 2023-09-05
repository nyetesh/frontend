import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XpasImageCard } from '../../image-card/image-card.component';

@Component({
    selector: 'xpas-page-container-info',
    templateUrl: './page-container-info.component.html',
    standalone: true,
    imports: [XpasImageCard, CommonModule],
    host: {
        class: 'xpas-page-container-info',
    },
})
export class XpasPageContainerInfo {
    @Input('heading') title!: string;
    @Input() type!: string;
    @Input() showMessage: boolean = false;
}