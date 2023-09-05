import { Component } from '@angular/core';
import { SclContextMenu } from '../context-menu';

@Component({
    selector: 'scl-context-menu-content',
    templateUrl: './context-menu-content.html',
    host: {
        class: 'scl-context-menu-content'
    },
    standalone: true,
})
export class SclContextMenuContent {
    constructor(
        private  contextMenu: SclContextMenu
    ){}
}
