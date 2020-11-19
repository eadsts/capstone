import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:62513/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
   
  //login when we are calling asynchronous AJAX calls outside the server we 
  //have to return it in Observable
  login(username: string, password: string): Observable<User> {
    return this.http.get(`${baseurl}/${username}/${password}`) as Observable<User>;
  }

  //gets all users
  list(): Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }
  //gets single user by id
  get(id: number): Observable<User> {
    return this.http.get(`${baseurl}/${id}`) as Observable<User>;
  }
  //inserts a user
  create(user: User): Observable<User> {
    return this.http.post(`${baseurl}`, user) as Observable<User>;
  }

  //updates a user
  change(user: User): Observable<any> {
    return this.http.put(`${baseurl}/${user.id}`, user) as Observable<any>;
  }

  //deletes a user
  remove(user: User): Observable<User> {
    return this.http.delete(`${baseurl}/${user.id}`) as Observable<User>;
  }
}
