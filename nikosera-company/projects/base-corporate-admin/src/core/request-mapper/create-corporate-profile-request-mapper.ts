import { Injectable } from '@angular/core';
import { RequestMapper } from './request-mapper';
import { CreateCorporateProfileFormData } from '@pages/corporate-profile/create/create-corporate-profile.component';
import { ChargeSetup, CreateCorporateProfileRequest, FeatureSetup, TxnLimitSetup } from '../corporate-profile.service';
import { TxnLimitSetupFormData } from '@pages/corporate-profile/create/txn-limit/txn-limit.component';

import { CorporateProfileChargeFormData } from '@pages/corporate-profile/create/detail/detail.component';
import { FeatureConstant } from '@core/constants/feature-constant';

@Injectable({
    providedIn: 'root',
})
export class CreateCorporateProfileRequestMapper implements RequestMapper<CreateCorporateProfileFormData, CreateCorporateProfileRequest> {
    map(formData: CreateCorporateProfileFormData): CreateCorporateProfileRequest {
        return {
            name: formData.detail.name,
            description: formData.detail.description,
            maxAllowedUsers: formData.detail.maximumNumberOfUsers,
            corporateHouseCharge: this.mapCharge(formData.detail.charge),
            features: this.mapFeatures(formData),
        };
    }

    mapCharge(charge: CorporateProfileChargeFormData): ChargeSetup {
        return {
            freeAccessPeriod: charge.freeAccessPeriod,
            registrationCharge: charge.registrationCharge,
            renewCharge: charge.renewCharge,
            renewInterval: charge.renewInterval,
        };
    }

    mapFeatures(formData: CreateCorporateProfileFormData): FeatureSetup[] {
        var featureSetup: FeatureSetup[] = [];
        formData.features.forEach((featureName) => {
            featureSetup.push({
                name: featureName,
                isActive: true,
                txnLimits:
                    featureName == FeatureConstant.INTRA_BANK || featureName == FeatureConstant.FONEPAY
                        ? this.mapTxnLimitSetup(formData.txnLimit)
                        : [],
            });
        });
        return featureSetup;
    }

    mapTxnLimitSetup(txnLimit: TxnLimitSetupFormData) {
        var txnLimits: TxnLimitSetup[] = [];
        txnLimits.push(
            {
                name: 'MAXIMUM_AMOUNT_PER_TRANSACTION',
                value: txnLimit.maxAmountPerTxn,
            },
            {
                name: 'MAXIMUM_AMOUNT_PER_DAY',
                value: txnLimit.maxAmountPerDay,
            },
            {
                name: 'MAXIMUM_AMOUNT_PER_MONTH',
                value: txnLimit.maxAmountPerMonth,
            },
            {
                name: 'MINIMUM_AMOUNT_PER_TRANSACTION',
                value: txnLimit.minAmountPerTxn,
            },
            {
                name: 'MAXIMUM_TRANSACTION_PER_DAY',
                value: txnLimit.maxTxnPerDay,
            }
        );
        return txnLimits;
    }
}
