import { Directive, HostListener, Input, Self, TemplateRef } from '@angular/core';
import { SclContextMenu } from './context-menu';

@Directive({
  selector: '[sclContextMenuItem]',
  standalone: true,
})
export class SclContextMenuItem {

    constructor(
        private contextMenu: SclContextMenu
    ){

    }
    @HostListener('click', ['$event'])
    onClick(event: Event) {
        event.stopPropagation();
        this.contextMenu.hideContextMenu();
    }
}