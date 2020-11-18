import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './request.class';
import { Observable } from 'rxjs';

const baseurl: string ="http://localhost:62513/api/requests";

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  //gets all requests
  list(): Observable<Request[]> {
    return this.http.get(`${baseurl}`) as Observable<Request[]>;
  }
  //gets single request by id
  get(id: number): Observable<Request> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }
  //inserts a request
  create(request: Request): Observable<Request> {
    return this.http.post(`${baseurl}`, request) as Observable<Request>;
  }

  //updates a request
  change(request: Request): Observable<any> {
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<any>;
  }

  //deletes a request
  remove(request: Request): Observable<Request> {
    return this.http.delete(`${baseurl}/${request.id}`) as Observable<Request>;
  }
}


