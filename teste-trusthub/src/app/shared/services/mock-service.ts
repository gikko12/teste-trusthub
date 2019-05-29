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
            basePath += `&description_like=${filter}`;
        }

        return this.http.get(basePath);
    }

    getMenuItem(
        id: number,
        basePath = this.basePath + '/menu/'
    ): Observable<any> {
        basePath += id;
        return this.http.get(basePath);
    }

    getEconomicGroups(
        basePath = this.basePath + '/economic-group?_sort=id%_order=asc'
    ): Observable<any> {
        return this.http.get(basePath);
    }

    getUser(
        id: number,
        basePath = this.basePath + '/users/'
    ): Observable<any> {
        basePath += id;
        return this.http.get(basePath);
    }

    getCountNotifications(
        basePath = this.basePath + '/notifications'
    ): Observable<number> {
        return this.http.get(basePath)
            .pipe(
                map(response => {
                    if (response) {
                        return response['length'];
                    }
                    return 0;
                })
            );
    }

    getNotifications(
        basePath = this.basePath + '/notifications?_sort=id%_order=asc'
    ): Observable<any> {
        return this.http.get(basePath);
    }

    getProducts(
        basePath = this.basePath + '/products?_sort=id%_order=asc'
    ): Observable<any> {
        return this.http.get(basePath);
    }

    getCountCancelledReceipts(
        basePath = this.basePath + '/cancelled-receipts'
    ): Observable<number> {
        return this.http.get(basePath)
            .pipe(
                map(response => {
                    if (response) {
                        return response['length'];
                    }
                    return 0;
                })
            );
    }

    getCountDigitalSignatures(
        basePath = this.basePath + '/digital-signatures'
    ): Observable<number> {
        return this.http.get(basePath)
            .pipe(
                map(response => {
                    if (response) {
                        return response['length'];
                    }
                    return 0;
                })
            );
    }

    getActions(
        basePath = this.basePath + '/actions?_sort=id%_order=asc'
    ): Observable<any> {
        return this.http.get(basePath);
    }
}