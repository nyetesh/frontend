import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        NbLayoutModule,
        NbSidebarModule,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'falcha-forms';
}
