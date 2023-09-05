import { Injectable } from '@angular/core';
import { RequestMapper } from './request-mapper';
import { FeatureSetup } from '../account-scheme-feature.service';
import { AccountFeatureSetup, CorporateHouseRegistrationFormData } from '@pages/corporate-house/create/corporate-house-register.component';

export interface CreateCorporateHouseRequest {
    cbsId: string;
    name: string;
    address: string;
    emailAddress: string;
    phoneNumber: string;
    pan: string;
    corporateProfileId: number;
    accounts: CreateAccountRequest[];
}

export interface CreateAccountRequest {
    accountNumber: string;
    isPrimary: boolean;
    isOperable: boolean;
    corporateFeatureSetup: FeatureSetup[];
    accountSchemeCode: string;
}

@Injectable({
    providedIn: 'root',
})
export class CreateCorporateHouseRequestMapper implements RequestMapper<CorporateHouseRegistrationFormData, CreateCorporateHouseRequest> {
    map(formData: CorporateHouseRegistrationFormData): CreateCorporateHouseRequest {
        const accounts: CreateAccountRequest[] = [];
        formData.accountsSetup.forEach((accountSetup) => {
            const account: CreateAccountRequest = {
                accountNumber: accountSetup.account.accountNumber,
                // corporateFeatureSetup: setup.features,

                corporateFeatureSetup: this.mapAccountFeatures(accountSetup.services),
                isPrimary: accountSetup.isPrimary,
                isOperable: true,
                accountSchemeCode: accountSetup.account.accountProfileType,
            };
            accounts.push(account);
        });

        const createCorporateHouseRequest: CreateCorporateHouseRequest = {
            cbsId: formData.cbsId,
            name: formData.firstName,
            address: formData.address || '',
            emailAddress: formData.emailAddress,
            phoneNumber: formData.phoneNumber,
            pan: formData.pan,
            corporateProfileId: formData.profile?.id || 0,
            accounts: [...accounts],
        };
        return createCorporateHouseRequest;
    }

    mapAccountFeatures(accountFeatures: AccountFeatureSetup[]): FeatureSetup[] {
        const features: FeatureSetup[] = [];
        accountFeatures.forEach((feature) => {
            features.push({
                name: feature.feature.name,
                isActive: feature.isActive,
            });
        });
        return features;
    }
}
