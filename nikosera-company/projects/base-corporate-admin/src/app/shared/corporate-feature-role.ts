export interface CorporateFeatureRole {
    name: string;
    label: string;
    children: Role[];
}

export interface Role {
    name: string;
    label: string;
    isActive: boolean;
}

export const ROLES: CorporateFeatureRole[] = [
    {
        name: 'Account',
        label: 'Account',
        children: [
            {
                name: 'VIEW_TXN_STATEMENT',
                label: 'Statement',
                isActive: false,
            },
        ],
    },
    {
        name: 'Intra Bank',
        label: 'Transfer',
        children: [
            {
                name: 'VIEW_INTRA_BANK',
                label: 'View',
                isActive: false,
            },
            {
                name: 'INITIATE_INTRA_BANK',
                label: 'Perform',
                isActive: false,
            },
        ],
    },
    {
        name: 'Fonepay',
        label: 'Fonepay',
        children: [
            {
                name: 'VIEW_FONEPAY',
                label: 'View',
                isActive: false,
            },
            {
                name: 'INITIATE_FONEPAY',
                label: 'Perform',
                isActive: false,
            },
        ],
    },
    {
        name: 'IPS',
        label: 'IPS',
        children: [
            {
                name: 'VIEW_IPS',
                label: 'View',
                isActive: false,
            },
            {
                name: 'INITIATE_IPS',
                label: 'Perform',
                isActive: false,
            },
        ],
    },
    {
        name: 'User Setup',
        label: 'User',
        children: [
            {
                name: 'CREATE_CORPORATE_USER',
                label: 'Create',
                isActive: false,
            },
            {
                name: 'EDIT_CORPORATE_USER',
                label: 'Edit',
                isActive: false,
            },
            {
                name: 'BLOCK_CORPORATE_USER',
                label: 'Block',
                isActive: false,
            },
            {
                name: 'UNBLOCK_CORPORATE_USER',
                label: 'Unblock',
                isActive: false,
            },

            {
                name: 'DELETE_CORPORATE_USER',
                label: 'Delete',
                isActive: false,
            },
        ],
    },
];
