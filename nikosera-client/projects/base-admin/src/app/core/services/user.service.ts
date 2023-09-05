import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LogInRequest, UserInfo } from './authentication.service';
import { AuthService } from 'oauth/src/app/services/auth.service';

export const USER_INFO_KEY = 'USER_INFO';

/**
 * Provides storage for authentication credentials.
 */
@Injectable({
    providedIn: 'root'
})
export class UserService {
    private savedInfo: UserInfo | null = null;

    /**
     * Gets the user info.
     * @return The user info or null if the user is not authenticated.
     */
    get info(): UserInfo | null {
        if (!this.savedInfo) {
            this.savedInfo = JSON.parse(window.sessionStorage.getItem(USER_INFO_KEY) as string) || null;
        }
        return this.savedInfo;
    }

    /**
     * Sets the user info.
     * The info are only persisted for the current session.
     * @param userInfo The user info.
     */
    set info(userInfo: UserInfo | null) {
        this.savedInfo = userInfo;
        if (!userInfo) {
            sessionStorage.removeItem(USER_INFO_KEY);
        } else {
            sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(this.savedInfo));
        }
    }

    constructor(
        private authService: AuthService,
    ) {
        const savedCredentials = sessionStorage.getItem(USER_INFO_KEY);
        console.log("Saved credentails after login :" + savedCredentials)
        if (savedCredentials) {
           this.savedInfo = JSON.parse(savedCredentials);
        }
    }

    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated(): boolean {
        return !!this.savedInfo;
    }


    saveUserInfo(userInfo: UserInfo | null) {
        this.savedInfo = userInfo;
        if (!userInfo) {
            sessionStorage.removeItem(USER_INFO_KEY);
        } else {
            sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(this.savedInfo));
        }
    }

    clearUserInfo() {
        console.log('item',sessionStorage.getItem(USER_INFO_KEY));
        sessionStorage.removeItem(USER_INFO_KEY);
        console.log('item',sessionStorage.getItem(USER_INFO_KEY));
    }
}
