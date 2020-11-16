import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
  
})

export class UserListComponent implements OnInit {

    users: User[] = [];
    // searchCriteria: string = "";
    // sortCriteria: string = "lastName";
    // ascSequence: boolean = true;
    tableStyle: string = "table table-sm";
    
  constructor(
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => { console.log(res);
      this.users = res as User[];
    },
    err => { console.error(err); }
    );
  }

}
