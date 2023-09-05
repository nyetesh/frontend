import { Injectable } from '@angular/core';
import { EditCorporateHouseFormData } from '@pages/corporate-house/edit/edit-corporate-house.component';
import { FeatureSetup } from '../account-scheme-feature.service';
import { RequestMapper } from './request-mapper';

export interface EditCorporateHouseRequest {
    corporateHouseId: number;
    name: string;
    address: string;
    emailAddress: string;
    phoneNumber: string;
    pan: string;
    corporateProfileId: number;
    accounts: EditAccountRequest[];
}

export interface EditAccountRequest {
    accountNumber: string;
    isPrimary: boolean;
    isOperable: boolean;
    corporateFeatureSetup: FeatureSetup[];
    accountSchemeCode: string;
}
@Injectable({
    providedIn: 'root',
})
export class EditCorporateHouseRequestMapper implements RequestMapper<EditCorporateHouseFormData, EditCorporateHouseRequest> {
    map(formData: EditCorporateHouseFormData): EditCorporateHouseRequest {
        if (formData.corporateHouse) {
            const accounts: EditAccountRequest[] = [];
            formData.setup.accountFeatures.forEach((setup) => {
                const account: EditAccountRequest = {
                    accountNumber: setup.account.accountNumber,
                    corporateFeatureSetup: setup.corporateFeatures,
                    isPrimary: setup.account.isPrimary,
                    isOperable: setup.account.isOperable,
                    accountSchemeCode: setup.account.accountScheme.code,
                };
                accounts.push(account);
            });

            const editCorporateHouseRequest: EditCorporateHouseRequest = {
                corporateHouseId: formData.corporateHouse.id,
                name: formData.detail.name,
                address: formData.detail.address,
                emailAddress: formData.detail.emailAddress,
                phoneNumber: formData.detail.phoneNumber,
                pan: formData.detail.pan,
                corporateProfileId: formData.setup.profile?.id || 0,
                accounts: [...accounts],
            };
            return editCorporateHouseRequest;
        }

        throw new Error('Invalid Request');
    }
}
