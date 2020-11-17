import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  //create a variable user which is undefined
  user: User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.user);
    this.usersvc.change(this.user).subscribe(
      res => {
        console.debug("User Removed:", res);
        this.router.navigateByUrl("/users/list");
      },
      err => { console.error("Error editing user: ", err); }
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
