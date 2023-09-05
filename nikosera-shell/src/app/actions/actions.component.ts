import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule } from '@nebular/theme';

@Component({
    selector: 'app-shell-actions',
    standalone: true,
    imports: [
        CommonModule,
        NbButtonModule,
    ],
    templateUrl: './actions.component.html',
})
export class ActionsComponent {

}