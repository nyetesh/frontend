import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'illustrationState',
  standalone: true,
})
export class XpasIllustrationPipe implements PipeTransform {

  transform(state: string): string {
    switch (state) {
        case 'success':
            return `assets/illustrations/success.svg`;
        case 'error':
            return `assets/illustrations/error.svg`;
        case 'email':
            return `assets/illustrations/email.svg`;
        case 'warning':
            return `assets/illustrations/warning.svg`;
        case 'image':
            return `assets/illustrations/image.svg`;
        case 'edit':
            return `assets/illustrations/edit.svg`;
        case 'shield':
            return `assets/illustrations/shield.svg`;
        case 'timeout':
            return `assets/illustrations/timeout.svg`;
        case 'trash':
            return `assets/illustrations/trash.svg`;
        case 'search':
            return `assets/illustrations/search.svg`;
        case 'no-data':
            return `assets/illustrations/no-data.svg`;
        case 'mobile-authentication':
            return `assets/illustrations/mobile-authentication.svg`;
        case 'in-maintenance':
            return `assets/illustrations/in-maintenance.svg`;
        case 'reset-password':
            return `assets/illustrations/reset-password.svg`;
        default:
            return 'default-image-url';
    }
  }
}