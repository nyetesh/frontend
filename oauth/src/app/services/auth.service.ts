import { Injectable } from "@angular/core";
import { AuthConfig, JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environment/environment";

export interface OauthConfigDTO {
    clientId: string,
    serverUrl: string,
    issuer: string,
    redirectUri: string,
    scope: string,
    tokenEndpoint: string,
    userinfoEndpoint: string,
    authorizationEndpoint: string,
    jwksEndpoint: string,
    showDebugInformation: boolean,
    disableAtHashCheck: boolean,
    requireHttps: boolean,
    responseType: string,
    logOutUrl: string,
    oidc: boolean,
    postLogoutRedirectUri: string
}

export interface OauthConfig {
    oauthConfig: OauthConfigDTO
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authConfig!: AuthConfig;
    url!: string;
    oauthConfig!: OauthConfigDTO;

    constructor(private oauthService: OAuthService,
        private http: HttpClient,
    ) {
        this.url = environment.OAUTH_CONFIG_URL;

        this.http.get<OauthConfig>(this.url).subscribe((response) => {
            this.oauthConfig = response.oauthConfig;
            console.log('response', this.oauthConfig);
            this.authConfig = {
                issuer: this.oauthConfig.serverUrl.concat(this.oauthConfig.issuer),
                redirectUri: this.oauthConfig.redirectUri,
                clientId: this.oauthConfig.clientId,
                scope: this.oauthConfig.scope,
                tokenEndpoint: this.oauthConfig.serverUrl.concat(this.oauthConfig.tokenEndpoint),
                userinfoEndpoint: this.oauthConfig.serverUrl.concat(this.oauthConfig.userinfoEndpoint),
                showDebugInformation: this.oauthConfig.showDebugInformation,
                loginUrl: this.oauthConfig.serverUrl.concat(this.oauthConfig.authorizationEndpoint),
                requireHttps: this.oauthConfig.requireHttps,
                disableAtHashCheck: this.oauthConfig.disableAtHashCheck,
                responseType: this.oauthConfig.responseType,
                logoutUrl: this.oauthConfig.logOutUrl,
                oidc: this.oauthConfig.oidc,
                postLogoutRedirectUri: this.oauthConfig.postLogoutRedirectUri
            };
            this.configureOauthService();
        });
    }

    public obtainAccessToken() {
        this.oauthService.initImplicitFlow();
    }

    public isLogIn(): boolean {
        if (this.oauthService.getAccessToken() === null) {
            return false;
        }
        return true;
    }

    private configureOauthService() {
        this.oauthService.configure(this.authConfig);
        this.oauthService.tryLogin({});
    }
    public getAccessToken(): string {
        return this.oauthService.getAccessToken();
    }

    public logOut() {
        this.oauthService.postLogoutRedirectUri
        this.oauthService.logOut();
    }

    setAuthToken(authToken: string) {
        sessionStorage.setItem('Authorization', authToken);
    }

    getAuthToken(): string | null {
        return sessionStorage.getItem('Authorization');
    }

    removeAuthToken() {
        sessionStorage.removeItem('Authorization');
    }
}