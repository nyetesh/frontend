import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';

@Component({
    selector: 'xpas-hero-section-title',
    templateUrl: './hero-section-title.html',
    standalone: true,
    imports: [CommonModule, NbButtonModule, StimulusModule],
    host: {
        class: 'xpas-hero-section-title',
    },
})
export class XpasHeroSectionTitle {
    @Input() name!: string;
}
