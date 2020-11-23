import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    message: string = "";
    username: string = "";
    password: string = "";
    user: User = null;

      constructor(
        private usersvc: UserService,
        private sysSvc: SystemService,
        private router: Router
      ) {}

  ngOnInit(): void {
    //default username/password so we don't have to login everytime
    this.username = "EEE";
    this.password = "EE11";
    this.sysSvc.loggedInUser = null; //clear out logged in user
    
  }
  //need to be logged in for request create and request review
  login() {
    console.log("in login method... uname="+this.username+", pwd="+this.password);
    this.usersvc.login(this.username, this.password).subscribe(
      res => {console.log("login()...", res);
      this.user = res as User;
      this.sysSvc.loggedInUser = this.user;
      this.router.navigateByUrl('/users/list')
    },
    err => {
      console.log("error...", err);
      //login error.. display in message
      this.message = "User Name or Password is incorrect";
    }
    );
  }

}
