
import { Component, Input } from '@angular/core';
import  {SclText} from 'stimulus/src/packages/typography/typography'

@Component({
    selector: 'xpas-account-card-header',
    templateUrl: './account-card-header.component.html',
    standalone: true,
    host: {
        class: 'xpas-account-card-header'
    },
        imports: [SclText],
})
export class XpasAccountCardHeaderComponent {

        @Input() accountType?: string ;
        @Input() accountNumber?: string ;
        @Input() accountHolder?: string ;
}
