import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  
  ) { }

  delete(): void {
    console.log(this.user);
    this.usersvc.remove(this.user).subscribe(
      res => {
        console.debug("User Removed:", res);
        this.router.navigateByUrl("/users/detail");
      },
      err => { console.error("Error removing user: ", err); }
    );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
      console.debug("User:", res);
      this.user = res;
      },
      err => { console.error(err) }
    );
  }
}

