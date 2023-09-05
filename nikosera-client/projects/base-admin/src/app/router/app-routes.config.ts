import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';
import { XpasShellComponent } from 'nikosera-shell/src/packages';
import { Roles } from '../constant/roles-constant';
import { ActionsComponent } from '../elements/actions/actions.component';
import { SidebarMenuComponent } from '../elements/sidebar-menu/sidebar-menu.component';

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
                providers: [
                    importProvidersFrom(NbMenuModule.forRoot())
                ],
            },
            {
                path: '',
                component: ActionsComponent,
                outlet: 'xpas-shell-actions',
                providers: []
            },
            {
                path: 'dashboard',
                loadComponent: () => import('../pages/dashboard/dashboard.component').then((module) => module.DashboardComponent)
            },
            {
                path: 'user/kyc',
                loadComponent: () => import('../pages/user-register/user-kyc.component').then((module) => module.UserKycComponent)
            },
            {
                path: 'company/search',
                loadComponent: () => import('../pages/company-list/company-list.component').then((module) => module.CompanyListComponent)
            },


            {
                path: 'text-editor',
                loadComponent: () => import('../pages/html-content-setup/html-content-setup.component').then((module) => module.HtmlContentSetupComponent),
                data: {
                    role: Roles.ADMIN_READ
                },
                children: [

                ]
            },
            {
                path: 'email-template',
                loadChildren: () => import('../pages/email-template/email-template-routing.module')
                    .then((module) => module.EmailTemplateRoutingModule),
                data: {
                    role: Roles.ADMIN_READ
                }
            },
        ]
    },
    {
        path: 'identity',
        loadComponent: () => import('../pages/identity/identity.component').then((module) => module.IdentityComponent),
    },
    {
        path: 'text-editor',
        loadComponent: () => import('../pages/html-content-setup/html-content-setup.component').then((module) => module.HtmlContentSetupComponent),
        data: {
            role: Roles.ADMIN_READ
        },
        children: [
        ]
    },


];