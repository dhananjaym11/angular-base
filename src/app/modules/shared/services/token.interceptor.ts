import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, empty, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AppSettings } from './app.settings';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private storageService: StorageService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.setAuthorizationHeader(req))
            .pipe(
                map(resp => {
                    if (resp instanceof HttpResponse) {
                        console.log('Response is ::' + resp);
                    }
                    return resp;
                }),
                catchError(err => {
                    console.log('event', event);
                    if (err instanceof HttpErrorResponse) {
                        return this.catch(err);
                    }
                })
            );
    }

    private setAuthorizationHeader(request: HttpRequest<any>): HttpRequest<any> {
        const token: string = this.storageService.getItem(AppSettings.TOKEN_KEY);
        debugger
        // request = request.clone({ setHeaders: { [AppSettings.HEADER_AUTHORIZATION]: (token || '') } });
        // req = req.clone({ setHeaders: { [AppSettings.HEADER_CONTENT_TYPE]: AppSettings.HEADER_CONTENT_TYPE_VALUE } });
        // req = req.clone({ setHeaders: { [AppSettings.HEADER_ACCEPT]: AppSettings.HEADER_CONTENT_TYPE_VALUE } });
        if (token) {
            request = request.clone({
                setHeaders: {
                    [AppSettings.HEADER_AUTHORIZATION]: token,
                    [AppSettings.HEADER_CONTENT_TYPE]: AppSettings.HEADER_CONTENT_TYPE_VALUE,
                    [AppSettings.HEADER_ACCEPT]: AppSettings.HEADER_CONTENT_TYPE_VALUE
                }
            });
        }
        return request;
    }

    private catch(error: HttpErrorResponse): Observable<any> {
        console.log('Error Response ::: ' + JSON.stringify(error.error));
        if (error.status === 401 || error.status === 400) {
            this.router.navigate(['/sign-in']);
            return empty();
        } else if (error.status === 417) {
            // const errMsg=body.general;
            return throwError(error.error);
        }
        return throwError(error.error);
    }
}
