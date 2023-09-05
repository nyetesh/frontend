import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { NbMenuModule, NbThemeModule } from '@nebular/theme';
import { AppRoutes } from './router/app-routes.config';
import { provideHttpClient } from '@angular/common/http';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthorizationInterceptor } from 'oauth/src/app/app.config';
import { AuthService } from 'oauth/src/app/services/auth.service';
import { withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            NbThemeModule.forRoot({ name: 'default' }),

            NbMenuModule.forRoot(),
            OAuthModule.forRoot(),
            AuthService
        ),
        provideHttpClient(withInterceptors([AuthorizationInterceptor])),
        provideAnimations(),
        provideRouter(AppRoutes, withComponentInputBinding()),
    ],
};

export const USER_INFO_KEY = 'Authorization';
