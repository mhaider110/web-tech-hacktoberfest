import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

   constructor(private http: HttpClient) {}

    getFrontendData(): Observable<any> {
        return this.http.get("assets/data/frontend.json");
    }
    getBackendData(): Observable<any> {
        return this.http.get("assets/data/backend.json");
    }
    getContributors(): Observable<any> {
        return this.http.get("assets/data/contributors.json");
    }
}