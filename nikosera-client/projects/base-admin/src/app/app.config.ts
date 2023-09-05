import { ApplicationConfig, Injectable, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NbMenuModule, NbThemeModule } from '@nebular/theme';
import { AppRoutes } from './router/app-routes.config';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { withInterceptors } from '@angular/common/http';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthorizationInterceptor, ErrorHandlerInterceptor } from 'oauth/src/app/app.config'
import { AuthService } from 'oauth/src/app/services/auth.service';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            NbThemeModule.forRoot(),
            NbMenuModule.forRoot(),
            OAuthModule.forRoot(),
            AuthService),
        provideHttpClient(withInterceptors([AuthorizationInterceptor, ErrorHandlerInterceptor])),
        provideAnimations(),
        provideRouter(AppRoutes),
    ]
};

export const USER_INFO_KEY = 'Authorization';

