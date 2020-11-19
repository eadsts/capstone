import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './request.class';
import { Observable } from 'rxjs';
import { request } from 'http';
import { User } from '../user/user.class'

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

  //gets all requests by primary key except if the user is trying to review their own request
  requests(id: number, request: Request, user: User): Observable<Request> {
    request.status == "REVIEW" && request.id != user.id;
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }

  //if request <=50 ? approved : review
  review(request: Request): Observable<Request> {
    request.status = request.total <= 50 ? "APPROVED" : "REVIEW";
    return this.http.get(`${baseurl}/${request.id}`) as Observable<Request>;
  }

  approve(request: Request): Observable<Request> {
    request.status = "APPROVED";
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<Request>;
  }

  rejected(request: Request): Observable<Request> {
    request.status = "REJECTED";
    // request.rejectionReason
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<Request>;
  }

}


