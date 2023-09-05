import { Component } from '@angular/core';
import { SclContextMenuContent } from '../context-menu-content/context-menu-content';

@Component({
    selector: 'scl-context-menu-list',
    templateUrl: './context-menu-list.html',
    host: {
        class: 'scl-context-menu-content__list'
    },
    standalone: true,
})
export class SclContextMenuList {
    constructor(
        private  contextMenuContent: SclContextMenuContent
    ){}
}
