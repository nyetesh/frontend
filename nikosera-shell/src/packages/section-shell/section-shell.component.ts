import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbMenuItem, NbMenuModule } from '@nebular/theme';
@Component({
    selector: 'xpas-section-shell',
    standalone: true,
    imports: [CommonModule, NbMenuModule, RouterModule],
    templateUrl: './section-shell.component.html',
    host: {
        class: 'xpas-section-shell',
    },
})
export class XpasSectionShellComponent {
    @Input() items: NbMenuItem[] = [];
}
