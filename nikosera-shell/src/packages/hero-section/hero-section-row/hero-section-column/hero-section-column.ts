import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'xpas-hero-section-column',
    standalone: true,
    templateUrl: './hero-section-column.html',
    host: {
        class: 'xpas-hero-section-column',
    },
    imports: [CommonModule],
})
export class XpasHeroSectionColumn {}
