import { FeatureConstant, Features } from '@core/constants/feature-constant';

export interface CorporateHouseFeature {
    name: string;
    label: string;
    children?: CorporateHouseFeature[];
    isActive: boolean;
}

export const ProfileFeatures: CorporateHouseFeature[] = [
    {
        ...Features.TXN_STATEMENT,
        isActive: false,
        children: [],
    },

    {
        ...Features.INTRA_BANK,
        isActive: false,
        children: [],
    },
    // {
    //     name: 'CIPS',
    //     label: 'CIPS',
    //     children: [],
    //     isActive: false,
    // },
    {
        ...Features.FONEPAY,
        children: [],
        isActive: false,
    },
    {
        ...Features.IPS,
        children: [],
        isActive: false,
    },
    {
        name: FeatureConstant.USER_SETUP,
        label: 'User Setup',
        isActive: false,
        children: [],
    },
];
