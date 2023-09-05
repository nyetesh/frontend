import { Component, ViewEncapsulation } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';

@Component({
    selector: 'storybook-shell',
    standalone: true,
    imports: [
        NbLayoutModule
    ],
    template: `
        <nb-layout>
            <nb-layout-column>
                <ng-content></ng-content>
            </nb-layout-column>
        </nb-layout>
    `,
    styleUrls: ['./storybook-shell.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class StorybookShellComponent { }