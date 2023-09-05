import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { NbMenuModule, NbThemeModule } from '@nebular/theme';
import { XpasShellComponent } from '../packages/shell/shell.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { ActionsComponent } from './actions/actions.component';

const ROUTES: Routes = [
    {
        path: '',
        component: XpasShellComponent,
        children: [
            {
                path: '',
                component: ActionsComponent,
                outlet: 'xpas-shell-actions'
            },
            {
                path: '',
                outlet: 'xpas-shell-sidebar-menu',
                providers: [
                    importProvidersFrom(NbMenuModule.forRoot())
                ]
            },
            {
                path: 'admin/manage',
                component: ManageAdminComponent
            },
        ]
    },
];

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(NbThemeModule.forRoot()),
        provideAnimations(),
        provideRouter(ROUTES),
    ]
};
