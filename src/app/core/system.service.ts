import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = null;

  //inject the property into the system service
  constructor(
    private router: Router
  ) { }

  isAdmin(): boolean {
    //if logged in user is null, return fales, else return logged in user
    //add this for reviewer
    return (this.loggedInUser == null) ? false : this.loggedInUser.isAdmin;
  }

  checkLogin(): void {
    //if user is not logged in, send to login page
    //comment out this code for testing progress
    if (this.loggedInUser == null) {
      console.log('User is not logged in ... redirecting to login.');
      this.router.navigateByUrl('/user/login');
    }
  }

}
