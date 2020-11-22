import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

const baseurl: string ="http://localhost:62513/api/requestlines";

@Injectable({
  providedIn: 'root'
})

export class RequestlineService {


  constructor(private http: HttpClient) { }

  //gets all requests
  list(): Observable<Requestline[]> {
    return this.http.get(`${baseurl}`) as Observable<Requestline[]>;
  }
  //gets single request by id
  get(id: number): Observable<Requestline> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Requestline>;
  }
  //inserts a request
  create(requestlines: Requestline): Observable<Requestline> {
    return this.http.post(`${baseurl}`, requestlines) as Observable<Requestline>;
  }

  //updates a request
  change(requestline: Requestline): Observable<any> {
    return this.http.put(`${baseurl}/${requestline.id}`, requestline) as Observable<any>;
  }

  //deletes a request
  remove(requestline: Requestline): Observable<Requestline> {
    return this.http.delete(`${baseurl}/${requestline.id}`) as Observable<Requestline>;
  }

}
