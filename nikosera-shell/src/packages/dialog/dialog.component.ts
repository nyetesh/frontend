import { Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbDialogRef, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'xpas-dialog',
    standalone: true,
    imports: [CommonModule, NbButtonModule, NbIconModule],
    templateUrl: './dialog.component.html',
    host: {
        class: 'xpas-dialog',
    },
})
export class XpasDialog {

}
