import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(protected http: HttpClient) { }

    processRegistration(): any {
        // return of([]);
        return this.http.get<any>("http://localhost:8090/register");
    }

}

