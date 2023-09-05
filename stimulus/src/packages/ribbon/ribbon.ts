import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SclBadge } from '../badge/badge';
import { NbIconLibraries, NbIconModule, NbIcons} from '@nebular/theme';

@Component({
    selector: 'scl-ribbon',
    templateUrl: './ribbon.html',
    standalone: true,
    imports: [
        CommonModule,
        SclBadge,
        NbIconModule
    ],
    host: {
        class: 'scl-ribbon'
    }
})
export class SclRibbon {
    @Input() status?: string;
    @Input() label?: string;
    @Input() iconName?: string;

    constructor(private iconLibraries: NbIconLibraries){
        this.iconLibraries.registerSvgPack('scl-key', SclBadgeIcons);
    }
}
export const SclBadgeIcons: NbIcons = {
    'key': `<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.313 1.5a3.188 3.188 0 0 0-3.188 3.188c0 .39.074.763.203 1.11L1.5 8.624V10.5h1.875V9.375H4.5V8.25h1.125l.578-.578c.346.129.719.203 1.11.203a3.188 3.188 0 0 0 0-6.375zm.75 1.5a.937.937 0 1 1 0 1.875.937.937 0 0 1 0-1.875z" fill="currentColor"/>
    </svg>`
}
