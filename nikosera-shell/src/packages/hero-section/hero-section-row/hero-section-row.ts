import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'xpas-hero-section-row',
    templateUrl: './hero-section-row.html',
    host: {
        class: 'xpas-hero-section-row',
    },
    standalone: true,
    imports: [CommonModule],
})
export class XpasHeroSectionRow {}
