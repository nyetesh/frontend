import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XpasSectionHeaderComponent } from '../section-header/section-header.component';

@Component({
    selector: 'xpas-data-list',
    standalone: true,
    imports: [
        CommonModule,
        XpasSectionHeaderComponent,
    ],
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss'],
    host: {
        class: 'xpas-data-list',
    },
})
export class XpasDataListComponent {
    @Input() label!: string;
}
