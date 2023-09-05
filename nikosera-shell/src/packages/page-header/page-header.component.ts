import {
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { NbButtonModule, NbIconLibraries, NbIconModule } from '@nebular/theme';
import { XpasPageHeaderIcons } from './page-header.icons';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'xpas-page-header',
    standalone: true,
    imports: [CommonModule, NbButtonModule, NbIconModule],
    templateUrl: './page-header.component.html',
    host: {
        class: 'xpas-page-header',
    },
    encapsulation: ViewEncapsulation.None,
})
export class XpasPageHeaderComponent {
    protected shouldShowBack: boolean =false ;
    @Input()
    set showBack(shouldShowBack: string | boolean) {
        this.shouldShowBack = coerceBooleanProperty(shouldShowBack);
    }
    get showBack() {
        return this.shouldShowBack;
    }

    @Input('heading')
    title!: string;

    constructor(
        private iconLibraries: NbIconLibraries,
        private location: Location
    ) {
        this.iconLibraries.registerSvgPack('page-header', XpasPageHeaderIcons);
    }

    back() {
        this.location.back();
    }
}
