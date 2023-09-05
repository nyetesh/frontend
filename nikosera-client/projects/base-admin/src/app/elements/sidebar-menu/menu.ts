import { NbMenuItem } from '@nebular/theme';
import { Roles } from "../../constant/roles-constant";
import { MenuTitle } from '../../constant/menu-title-constant';

export interface MenuItem extends NbMenuItem {
    // //code: Roles
}

export const MENU_ITEMS: MenuItem[] = [
    {
        title: MenuTitle.DASHBOARD,
        link: '/dashboard',
        home: true,
        icon: { pack: 'sidebar-menu', icon: 'dashboard' },
        //code: ''
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
        title: MenuTitle.COMPANY,
        icon: { pack: 'sidebar-menu', icon: 'user-admin' },
        link: '/user/kyc'
    },

    // {
    //     title: MenuTitle.ADMIN,
    //     icon: { pack: 'sidebar-menu', icon: 'user-admin' },
    //     children: [
    //         {
    //             title: MenuTitle.CREATE,
    //             link: '/admin/create',
    //         },
    //         {
    //             title: MenuTitle.MANAGE,
    //             link: '/admin',
    //             queryParams: { tab: 'all' },
    //             queryParamsHandling: 'merge',
    //         },
    //         {
    //             title: MenuTitle.REQUEST,
    //             link: '/admin/request',
    //             queryParams: { tab: 'create' },
    //             queryParamsHandling: 'merge',
    //         },
    //         {
    //             title: MenuTitle.TEXT_EDITOR,
    //             link: '/text-editor',
    //         },
    //         {
    //             title: MenuTitle.ACTIVITY_DETAILS,
    //             link: '/admin/user-activity',
    //         }
    //     ],
    //     //code: ''
    // },

    // {
    //     title: MenuTitle.TELLER,
    //     icon: { pack: 'sidebar-menu', icon: 'people-audience' },
    //     children: [
    //         {
    //             title: MenuTitle.CREATE,
    //             link: '/teller/create',
    //         },
    //         {
    //             title: MenuTitle.MANAGE,
    //             link: '/teller',
    //             queryParams: { tab: 'all' },
    //             queryParamsHandling: 'merge',
    //         },
    //     ],
    //     //code: ''
    // },
    // {
    //     title: MenuTitle.CUSTOMER,
    //     icon: { pack: 'sidebar-menu', icon: 'user-admin' },
    //     children: [
    //         {
    //             title: MenuTitle.REGISTER,
    //             link: '/customer/create',
    //         },
    //         {
    //             title: MenuTitle.MANAGE,
    //             link: '/customer',
    //             // queryParams: { tab: 'Pending' },
    //             // queryParamsHandling: 'merge',
    //         },
    //         {
    //             title: MenuTitle.BULK_REGISTER,
    //             link: '/customer/bulk'
    //         },
    //         {
    //             title: MenuTitle.BULK_REGISTER_MANAGER,
    //             link: '/bulk-register',
    //             queryParams: { tab: 'Pending' },
    //             queryParamsHandling: 'merge',
    //         },

    //     ],
    //     //code: ''
    // },
    {
        title: MenuTitle.SETUP,
        group: true,
        //code: ''
    },
    {
        title: MenuTitle.PROFILE
        ,
        icon: { pack: 'sidebar-menu', icon: 'content-settings' },
        children: [
            {
                title: 'Create Admin Profile',
                link: '/admin-profile/create',
            },
            {
                title: 'Manage Admin Profile',
                link: '/admin-profile',
                queryParams: { tab: 'All' },
                queryParamsHandling: 'merge',
            },
            {
                title: 'Create Customer Profile',
            },
            {
                title: 'Manage Customer Profile'
            }
        ],
        //code: ''
    },
    {
        title: MenuTitle.CMS,
        icon: { pack: 'sidebar-menu', icon: 'warning' },
        children: [
            {
                title: MenuTitle.HTML_CONTENT_SETUP,
                link: '/content',
            },
            {
                title: MenuTitle.PROMOTION,
                link: '/promotion',
            },
            {
                title: MenuTitle.TERMS_AND_CONDITION,
                link: '/terms-and-conditions',
            },
            {
                title: MenuTitle.EMAIL_TEMPLATE,
                link: '/email-template'
            }
        ],
        //code: ''
    },
    {
        title: MenuTitle.APPLICATION,
        icon: { pack: 'sidebar-menu', icon: 'slide-settings' },
        children: [
            {
                title: MenuTitle.SYSTEM_CONFIG,
                link: '/system-config',
            },

        ],
        //code: ''
    },
    {
        title: MenuTitle.CHECKER,
        group: true,
        //code: ''
    }, {
        title: MenuTitle.REQUESTS,
        icon: { pack: 'sidebar-menu', icon: 'slide-settings' },
        children: [
            {
                title: MenuTitle.CUSTOMERS,
                children: [
                    {
                        title: MenuTitle.MANUAL_REGISTER,
                        link: '/request/customer/manual',
                        queryParams: { tab: 'Pending' },
                        queryParamsHandling: 'merge',
                    },
                    {
                        title: MenuTitle.BULK,
                        link: '/request/bulk',
                        queryParams: { tab: 'Pending' },
                        queryParamsHandling: 'merge',
                    },
                    {
                        title: MenuTitle.EDIT,
                        link: '/request/customer/edit',
                        queryParams: { tab: 'Pending' },
                        queryParamsHandling: 'merge',
                    },
                    {
                        title: MenuTitle.RESET_PASSWORD,
                        link: '/request/customer/reset-password',
                        queryParams: { tab: 'Pending' },
                        queryParamsHandling: 'merge',
                    },
                    {
                        title: MenuTitle.RESET_DEVICE,
                        link: '/request/customer/device-reset',
                        queryParams: { tab: 'Pending' },
                        queryParamsHandling: 'merge',
                    },
                    {
                        title: MenuTitle.DELETE,
                        link: '/request/customer/delete',
                        queryParams: { tab: 'Pending' },
                        queryParamsHandling: 'merge',
                    }
                ]
            },


        ],
        //code: ''
    },
]