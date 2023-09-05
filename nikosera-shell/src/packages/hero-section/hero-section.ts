import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule, NbUserModule } from '@nebular/theme';
import { ExtractInitial } from '../extract-inital/extract-initial';

@Component({
    selector: 'xpas-hero-section',
    standalone: true,
    imports: [
        CommonModule,
        NbButtonModule,
        NbIconModule,
        NbUserModule,
        ExtractInitial,
    ],
    templateUrl: './hero-section.html',
    host: {
        class: 'xpas-hero-section',
    },
})
export class XpasHeroSection {
    @Input()
    name!: string;
}
