import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs';

export const USER_INFO_KEY = 'Authorization';

export function AuthorizationInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {

    console.log("Access token", sessionStorage.getItem('AccessToken'))
    // const authService = inject(AuthService);
    const accessToken = sessionStorage.getItem('AccessToken');

    const header = accessToken ? { Authorization: accessToken } : undefined;
    const clonedRequest: HttpRequest<any> = req.clone({
        setHeaders: header,
    })

    return next(clonedRequest).pipe(
        // Update the authorization token in the session storage from response header
        map((event: HttpEvent<any>) => {
            return event;
        }),
    );
}

export function ErrorHandlerInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    return next(req).pipe(
        map((response) => {
            if (response instanceof HttpResponse && response.body) {
                const responseBody = response.body;
                if (typeof responseBody === 'object' && 'success' in responseBody && !responseBody.success) {
                    throw responseBody;
                }
            }
            return response;
        }),
        catchError((error) => {
            if (error instanceof HttpErrorResponse) {
                const code = error.status;
                switch (code) {
                    case 401:
                        if (error.error && error.error.code === '2') {
                            // Handle 401 error with code 2
                        }
                        break;
                }
                throw error.error;
            }
            throw error;
        })
    );
}


