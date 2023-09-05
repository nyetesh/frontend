export interface Feature {
    name: string;
    label: string;
}

export enum FeatureConstant {
    // ACCOUNT = 'Account',
    TXN_STATEMENT = 'TXN_STATEMENT',
    // TRANSFER = 'FUND_TRANSFER',
    INTRA_BANK = 'INTRA_BANK',
    FONEPAY = 'FONEPAY',
    IPS = 'IPS',
    // CIPS,
    // UTILITY_PAYMENT,

    USER_SETUP = 'CORPORATE_USER_SETUP',
}

export class Features {
    static readonly TXN_STATEMENT: Feature = { name: FeatureConstant.TXN_STATEMENT, label: 'Statement' };

    static readonly INTRA_BANK: Feature = { name: FeatureConstant.INTRA_BANK, label: 'Same Bank Transfer' };
    static readonly FONEPAY: Feature = { name: FeatureConstant.FONEPAY, label: 'Fonepay Transfer' };
    static readonly IPS: Feature = { name: FeatureConstant.IPS, label: 'IPS Transfer' };

    static readonly USER_SETUP: Feature = { name: FeatureConstant.USER_SETUP, label: 'User' };
}

export const ALL_FEATURES: Feature[] = [Features.INTRA_BANK, Features.TXN_STATEMENT, Features.USER_SETUP, Features.FONEPAY, Features.IPS];

export const ACCOUNT_FEATURES: Feature[] = [Features.INTRA_BANK, Features.TXN_STATEMENT, Features.FONEPAY, Features.IPS];
