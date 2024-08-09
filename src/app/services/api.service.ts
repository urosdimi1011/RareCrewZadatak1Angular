import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from "src/app/constats/config";
@Injectable({
    providedIn: 'root'
})
export class ApiService<T> {

    constructor(
        protected http: HttpClient,
        @Inject("apiPath") protected apiPath: string
    ) { }
    private apiSuf = config.server
    getAll(): Observable<T> {
        return this.http.get<T>(this.apiSuf + this.apiPath);
    }

    get(id: number | string): Observable<T> {
        return this.http.get<T>(this.apiSuf + this.apiPath + '/' + id);
    }

    create(dataToSend: any, headers?: HttpHeaders): Observable<any> {
        return this.http.post(this.apiSuf + this.apiPath, dataToSend, { headers: headers });
    }
    update(id: number | string, dataToSend: T): Observable<T> {
        return this.http.patch<T>(this.apiSuf + this.apiPath + '/' + id, dataToSend);
    }

    delete(id: number | string): Observable<T> {
        return this.http.delete<T>(this.apiSuf + this.apiPath + "/" + id);
    }
}