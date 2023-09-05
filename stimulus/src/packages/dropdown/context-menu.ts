import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NbPopoverDirective, NbPopoverModule } from '@nebular/theme';

@Component({
    selector: 'scl-context-menu',
    templateUrl: './context-menu.html',
    host: {
        class: 'scl-context-menu'
    },
    standalone: true,
    imports: [
         CommonModule,
         NbPopoverModule
    ]
})
export class SclContextMenu {
    @ViewChild(NbPopoverDirective) popover!: NbPopoverDirective;

    hideContextMenu() {
        this.popover.hide();
    }
}
