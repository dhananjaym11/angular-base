import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { AppSettings } from './app.settings';
import { UiService } from './ui.service';

@Injectable({
    providedIn: 'root'
})
export class ApiClientService {
    constructor(
        private http: HttpClient,
        private uiService: UiService
    ) { }

    private prependApiUrl(url: string): string {
        return AppSettings.BASE_URL + '/' + url;
    }

    get(url: string): Observable<Object> {
        this.showLoader();
        return this.http.get(this.prependApiUrl(url))
            .pipe(map(Response => this.handleSuccess(Response)));
    }

    post<T>(url: string, body: any): Observable<Object> {
        this.showLoader();
        return this.http.post(this.prependApiUrl(url), body)
            .pipe(map(Response => this.handleSuccess(Response)));
    }

    put<T>(url: string, body?: any): Observable<Object> {
        this.showLoader();
        return this.http.put(this.prependApiUrl(url), body)
            .pipe(map(Response => this.handleSuccess(Response)));
    }

    delete<T>(url: string): Observable<Object> {
        this.showLoader();
        return this.http.delete(this.prependApiUrl(url))
            .pipe(map(Response => this.handleSuccess(Response)));
    }

    patch(url: string, body: any): Observable<Object> {
        this.showLoader();
        return this.http.patch(this.prependApiUrl(url), body);
    }

    head(url: string): Observable<Object> {
        return this.http.head(this.prependApiUrl(url));
    }

    options(url: string): Observable<Object> {
        this.showLoader();
        return this.http.options(this.prependApiUrl(url));
    }

    private handleSuccess<T>(res) {
        this.hideLoader();
        return res;
    }

    public showLoader(): void {
        this.uiService.toggleLoader(true);
    }

    public hideLoader(): void {
        this.uiService.toggleLoader(false);
    }
}