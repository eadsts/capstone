import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestlines } from './requestline.class';

const baseurl: string ="http://localhost:62513/api/requestlines";

@Injectable({
  providedIn: 'root'
})

export class RequestlineService {

  private http: HttpClient;

  constructor() { }

  //gets all requests
  list(): Observable<Requestlines[]> {
    return this.http.get(`${baseurl}`) as Observable<Requestlines[]>;
  }
  //gets single request by id
  get(id: number): Observable<Requestlines> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Requestlines>;
  }
  //inserts a request
  create(requestlines: Requestlines): Observable<Requestlines> {
    return this.http.post(`${baseurl}`, requestlines) as Observable<Requestlines>;
  }

  //updates a request
  change(requestlines: Requestlines): Observable<any> {
    return this.http.put(`${baseurl}/${requestlines.id}`, requestlines) as Observable<any>;
  }

  //deletes a request
  remove(requestlines: Requestlines): Observable<Requestlines> {
    return this.http.delete(`${baseurl}/${requestlines.id}`) as Observable<Requestlines>;
  }

}
