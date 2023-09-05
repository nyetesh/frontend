import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';

@Component({
    selector: 'scl-info-column',
    templateUrl: './info-column.html',
    standalone: true,
    imports: [
        CommonModule,
        NbButtonModule
    ],
    host: {
        class: 'scl-info-column'
    }
})
export class SclInfoColumn {
    @Input() heading!:string;
}
