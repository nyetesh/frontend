import { Component } from '@angular/core';
import { NbIconLibraries, NbLayoutModule, NbMenuItem, NbMenuModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { AuthService } from 'oauth/src/app/services/auth.service';
import { StimulusModule } from 'stimulus/src/packages/stimulus.module';
import { UserInfo } from '../../core/services/authentication.service';
import { UserService } from '../../core/services/user.service';
import { RolesService } from '../roles.service';
import { MENU_ITEMS, MenuItem } from './menu';
import { SIDEBAR_ICONS } from './sidebar-menu-icons';
import { XpasSectionSeparator } from 'nikosera-shell/src/packages';

@Component({
    selector: 'crpb-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    standalone: true,
    imports: [
        NbMenuModule,
        NbSidebarModule,
        NbLayoutModule,
        StimulusModule,
        XpasSectionSeparator,
    ],
    providers: [RolesService, AuthService]
})
export class SidebarMenuComponent {
    menuItems = MENU_ITEMS;
    authorizedMenu: NbMenuItem[] = [];
    userInfo!: UserInfo;

    get name() {
        if (this.userInfo.name) {
            return this.userInfo.name;
        }
        return '';
    }

    get userType() {
        if (this.userInfo.userType) {
            return this.userInfo.userType;
        }
        return '';
    }

    constructor(
        private iconLibraries: NbIconLibraries,
        private rolesService: RolesService,
        private authService: AuthService,
        private userService: UserService
    ) {
        this.iconLibraries.registerSvgPack('sidebar-menu', SIDEBAR_ICONS);
    }

    ngOnInit() {
        this.authorizedMenu = this.getAuthorizedMenus();
        if (this.userService.info) {
            this.userInfo = this.userService.info;
        }
    }

    getAuthorizedMenus(): NbMenuItem[] {
        return this.menuItems.filter((menu: MenuItem) => {
            return true;
        })
    }

    logOut() {
        this.clearSessionData();
        this.authService.logOut();
    }

    clearSessionData() {
        this.userService.clearUserInfo();
        sessionStorage.removeItem('AccessToken');
        sessionStorage.removeItem('initialData');
    }
}
