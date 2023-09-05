import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            NbThemeModule.forRoot(),
            NbSidebarModule.forRoot(),
        ),
        provideAnimations(),
        provideRouter(routes)
    ]
};
