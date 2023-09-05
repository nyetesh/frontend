import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    APP_NAME = 'Nikosera';
    BANK_NAME = environment.BANK_NAME;

    ASSETS = {
        APP_LOGO: 'assets/brand/logos-brand-light.svg',
        BANK_LOGO: environment.BANK_LOGO,
    };

    ILLUSTRATIONS = {
        WARNING: {
            src: this.setAssets('illustrations/illustrations-custom-warning@2x.png'),
            alt: 'warning',
        },
        EMPTY: {
            src: this.setAssets('illustrations/empty-folder@2x.png'),
            alt: 'empty-folder illustration',
            srcset:
                this.setAssets('illustrations/empty-folder@3x.png') + ' 3x,' +
                this.setAssets('illustrations/empty-folder@2x.png') + ' 2x,' +
                this.setAssets('illustrations/empty-folder.png') + ' 1x'
        },
    };

    setAssets(name: string) {
        return `assets/${name}`;
    }
}
