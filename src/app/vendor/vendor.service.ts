import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:62513/api/vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private http: HttpClient
  ) { }

  //gets all vendors
  list(): Observable<Vendor[]> {
    return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
  }
  //gets single vendor by id
  get(id: number): Observable<Vendor> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Vendor>;
  }
  //inserts a vendor
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${baseurl}`, vendor) as Observable<Vendor>;
  }

  //updates a vendor
  change(vendor: Vendor): Observable<any> {
    return this.http.put(`${baseurl}/${vendor.id}`, vendor) as Observable<any>;
  }

  //deletes a vendor
  remove(vendor: Vendor): Observable<Vendor> {
    return this.http.delete(`${baseurl}/${vendor.id}`) as Observable<Vendor>;
  }
}

