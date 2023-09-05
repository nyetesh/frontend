import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    ViewChildren,
    QueryList,
    OnInit,
    ViewChild,
    Optional,
} from '@angular/core';
import {
    NbAccordionComponent,
    NbAccordionItemComponent,
    NbAccordionModule,
    NbButtonModule,
    NbIconLibraries,
    NbIconModule,
} from '@nebular/theme';
import { SclAccordionIcons } from './accordion.icons';

export interface SclAccordionItem {
    name: string;
    isExpanded?: boolean;
    children?: SclAccordionItem[];
}

@Component({
    selector: 'scl-accordion',
    templateUrl: './accordion.html',
    host: {
        class: 'scl-accordion',
    },
    standalone: true,
    imports: [CommonModule, NbAccordionModule, NbButtonModule, NbIconModule],
    exportAs: 'sclAccordion',
})
export class SclAccordion implements OnInit {
    @ViewChildren(NbAccordionItemComponent)
    accordionItems?: QueryList<NbAccordionItemComponent>;

    @Input('dataSource') accordion?: SclAccordionItem[] = [];

    @Input()
    expanded?: boolean;
    isAllExpanded = false;
    allAccordion: SclAccordionItem[] = [];

    @ViewChildren(SclAccordion) childrenAccordions?: QueryList<SclAccordion>

    constructor(
        private iconLibraries: NbIconLibraries,
    ) {
        this.iconLibraries.registerSvgPack('scl-accordion', SclAccordionIcons);
    }

    ngOnInit(): void {
        this.flatAccordon(this.accordion)
    }

    flatAccordon(accordion?: SclAccordionItem[]) {
        accordion?.forEach((item) => {
            if(item.children?.length) {
                 this.allAccordion.push({
                    name: item.name,
                    isExpanded: false
                 });

                 this.flatAccordon(item.children);
            }
        })
    }

    toggle() {
        if(this.isAllExpanded) {
            this.expanded = false;
        } else {
            this.expanded = true;
        }
        this.allAccordion.forEach((item) => item.isExpanded = this.expanded);
        this.isAllExpanded = this.expanded

    }

    areAllItemsExpanded(): boolean {
        if (this.accordionItems) {
            return this.accordionItems.toArray().every((item) => item.expanded);
        }
        return false;
    }

    onAccordionChange(node: SclAccordionItem, accordionItem: NbAccordionItemComponent) {
        const selectedAccordion: SclAccordionItem | undefined = this.allAccordion.find((item) => item.name === node.name);

        if (selectedAccordion) {
            selectedAccordion.isExpanded = accordionItem.expanded;
            this.isAllExpanded = this.allAccordion.every((item) => item.isExpanded);
        }

        if (this.childrenAccordions?.length)
            this.childrenAccordions.forEach((childnode: SclAccordion) => {
            });
        }
        
  
}

