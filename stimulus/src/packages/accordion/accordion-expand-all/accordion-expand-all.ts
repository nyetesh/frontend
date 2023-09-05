import { Component, Input } from '@angular/core';
import { NbButtonModule, NbIconLibraries,NbIconModule } from '@nebular/theme';
import { SclAccordionIcons } from '../accordion.icons';
import { SclAccordion } from '../accordion';

@Component({
    selector: 'scl-accordion-expand-all',
    imports: [NbButtonModule, NbIconModule],
    templateUrl: './accordion-expand-all.html',
    standalone: true,
})
export class SclAccordionExpandAll {

    @Input() sclAccordionExpandAll!: SclAccordion;
    constructor(private iconLibraries: NbIconLibraries) {
        this.iconLibraries.registerSvgPack('scl-accordion', SclAccordionIcons);
    }

    toggleAccordion(){
        this.sclAccordionExpandAll.toggle();
    }    
}
