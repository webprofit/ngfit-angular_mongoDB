import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

Injectable();
export class DataService {
    constructor(
       private http: HttpClient
    ) {
    }

    mainDataSvc(method: string, url: string, obj?) {
        if (method === 'get') {
            return this.http.get(url);
        }
        if (method === 'post') {
            return this.http.post(url, obj);
        }
        if (method === 'delete') {
            return this.http.delete(url);
        }
    }

}
