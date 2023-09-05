import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbIconLibraries, NbIconModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { FormContainerComponent } from '../form-container/form-container.component';
import { XpasShellIcons } from './shell-icons';
import { XpasNebularEssentialsIcons } from './nebular-icon';

@Component({
    selector: 'xpas-shell',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        NbLayoutModule,
        NbSidebarModule,
        NbButtonModule,
        NbIconModule,
        FormContainerComponent,
    ],
    providers: [
        NbSidebarService
    ],
    templateUrl: './shell.component.html',
    host: {
        class: 'xpas-shell'
    }
})
export class XpasShellComponent {
    constructor(
        private sidebarService: NbSidebarService,
        private iconLibraries: NbIconLibraries
    ) {
        this.iconLibraries.registerSvgPack('xpas-shell', XpasShellIcons);
        this.iconLibraries.registerSvgPack('nebular-essentials', XpasNebularEssentialsIcons);
    }

    sidebarToggle() {
        this.sidebarService.toggle(true);
        return false;
    }
}
