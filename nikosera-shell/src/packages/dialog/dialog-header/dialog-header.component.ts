import { Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbDialogRef, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'xpas-dialog-header',
    standalone: true,
    imports: [CommonModule, NbButtonModule, NbIconModule],
    templateUrl: './dialog-header.component.html',
    host: {
        class: 'xpas-dialog-header',
    },
})
export class XpasDialogHeader {
    @Input('heading') title!:string;
    @Input() ref!:NbDialogRef<any>; 

    closeDialog() {
        this.ref.close()
    }
}
