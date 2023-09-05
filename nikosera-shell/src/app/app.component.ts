import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbThemeModule } from '@nebular/theme';

@Component({
    selector: 'xpas-root',
    standalone: true,
    imports: [
        NbThemeModule,
        RouterOutlet,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'nikosera-shell';
}
