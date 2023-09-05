import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';
import { XpasShellComponent } from 'nikosera-shell/src/packages';
import { SidebarMenuComponent } from '../elements/sidebar-menu/sidebar-menu.component';

export const DASHBOARD: string = 'dashboard';

export const AppRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('../pages/login/login.component').then((module) => module.LoginComponent),
    },
    {
        path: '',
        component: XpasShellComponent,
        children: [
            {
                path: '',
                component: SidebarMenuComponent,
                outlet: 'xpas-shell-sidebar-menu',
                providers: [importProvidersFrom(NbMenuModule.forRoot())],
            },
            {
                path: 'user/kyc',
                loadComponent: () => import('../pages/admin-register/admin-register.component').then((module) => module.AdminRegisterComponent)
            },
            {
                path: 'customers',
                loadComponent: () => import('../pages/customer-list/customer-list.component').then((module) => module.CustomerListComponent)
            }
        ],
    },
    {
        path: 'identity',
        loadComponent: () => import('../pages/identity/identity.component').then((module) => module.IdentityComponent),
    },
];
