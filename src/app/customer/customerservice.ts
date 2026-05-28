import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customermodel } from './customermodel';

@Injectable({
    providedIn: 'root'
})

export class Customermodelservice {

    private apiUrl = 'http://localhost:8080/customers';

    constructor(private http: HttpClient) { }

    getAllCustomermodels(): Observable<Customermodel[]> {

        return this.http.get<Customermodel[]>(this.apiUrl);
    }

    createCustomermodel(customer: Customermodel): Observable<Customermodel> {

        return this.http.post<Customermodel>(this.apiUrl, customer);
    }

    getCustomermodelById(id: any): Observable<Customermodel> {

        return this.http.get<Customermodel>(`${this.apiUrl}/${id}`);
    }

    deleteCustomermodel(id: any): Observable<any> {

        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}