import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'xpas-dialog-footer',
    standalone: true,
    imports: [CommonModule, NbButtonModule, NbIconModule],
    templateUrl: './dialog-footer.component.html',
    host: {
        class: 'xpas-dialog-footer',
    },
})
export class XpasDialogFooter {

}
