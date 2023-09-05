import { Injectable } from '@angular/core';
import { RequestMapper } from './request-mapper';
import { FeatureSetup } from '../account-scheme-feature.service';
import { CreateUserFormData } from '@pages/corporate-user/create/create-user.component';
import { CreateUserRequest, UserAccountSetup, UserRoleSetup } from '../corporate-user.service';
import { AccountSetupFormData } from '@pages/corporate-user/create/setup/setup.component';
import { Role } from '@shared/corporate-feature-role';

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
export class CreateUserRequestMapper implements RequestMapper<CreateUserFormData, CreateUserRequest> {
    map(formData: CreateUserFormData): CreateUserRequest {
        const createRequest: CreateUserRequest = {
            credentialDeliveryChannel: formData.detail.credentialDeliveryChannel,
            isRootUser: formData.detail.isRootUser,
            userSetup: {
                name: formData.detail.name,
                emailAddress: formData.detail.emailAddress,
                resident: formData.detail.resident,
                mobileNumber: formData.detail.mobileNumber,
                sex: formData.detail.gender,
                address: formData.detail.address,
                dateOfBirth: formData.detail.dateOfBirth,
            },
            username: formData.setup.username,
            corporateHouseId: formData.setup.corporateHouse.id,
            userRoleSetup: this.mapUserRoles(formData.setup.roles),
            userAccountSetup: this.mapUserAccounts(formData.setup.accounts),
        };
        return createRequest;
    }
    private mapUserRoles(roles: Role[]): UserRoleSetup[] {
        const userRoles: UserRoleSetup[] = [];
        roles.forEach((role) => {
            userRoles.push({
                name: role.name,
                isActive: true,
            });
        });
        return userRoles;
    }

    private mapUserAccounts(accounts: AccountSetupFormData[]): UserAccountSetup[] {
        const userAccounts: UserAccountSetup[] = [];
        accounts.forEach((account) => {
            userAccounts.push({
                id: account.account.id,
                isActive: account.isActive,
            });
        });
        return userAccounts;
    }
}
