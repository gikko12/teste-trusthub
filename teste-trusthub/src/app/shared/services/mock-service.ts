import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class MockService {
    basePath = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getMenu(
        filter: string,
        basePath = this.basePath + '/menu?_sort=order%_order=asc'
    ): Observable<any> {
        if (filter) {
            basePath += `&description=${filter}`;
        }

        return this.http.get(basePath);
    }
}