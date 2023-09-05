import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'xpas-dialog-body',
    standalone: true,
    imports: [CommonModule, NbButtonModule, NbIconModule],
    templateUrl: './dialog-body.component.html',
    host: {
        class: 'xpas-dialog-body',
    },
})
export class XpasDialogBody {

}
