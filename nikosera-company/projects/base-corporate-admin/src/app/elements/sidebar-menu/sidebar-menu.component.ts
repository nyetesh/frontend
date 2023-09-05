import { Component } from '@angular/core';
import { NbIconLibraries, NbMenuItem, NbMenuModule } from '@nebular/theme';
import { MenuTitle } from '../../constants/menu-title-constant';
import { SIDEBAR_ICONS } from './sidebar-menu-icons';
import { XpasShellIcons } from 'nikosera-shell/src/packages/shell/shell-icons';

@Component({
    selector: 'xpc-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    standalone: true,
    imports: [NbMenuModule],
})
export class SidebarMenuComponent {
    menuItems: NbMenuItem[] = [
        {
            title: 'Dashboard',
            link: '/dashboard',
            home: true,
            icon: { pack: 'sidebar-menu', icon: 'dashboard' },
        },
        {
            title: MenuTitle.USERS,
            group: true,
            //code: ''
        },
        {
            title: MenuTitle.KYC,
            icon: { pack: 'sidebar-menu', icon: 'user-admin' },
            link: '/user/kyc'
        },
        {
            title: MenuTitle.CUSTOMERS,
            icon: { pack: 'xpas-shell', icon: 'users' },
            link: '/customers'
        }
    ];

    constructor(private iconLibraries: NbIconLibraries) {
        this.iconLibraries.registerSvgPack('sidebar-menu', SIDEBAR_ICONS);
        this.iconLibraries.registerSvgPack('xpas-shell', XpasShellIcons);
    }
}
