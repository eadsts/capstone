import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
  
})

export class UserListComponent implements OnInit {

    users: User[] = [];
    searchCriteria: string = "";
    sortCriteria: string = "lastName";
    ascSequence: boolean = true;
    tableStyle: string = "table table-sm";
    
  constructor(
    private usersvc: UserService
  ) { }

  //on click, pass in the column the user clicked on as a
  //string for the sort. return void
  //sort by ascending 
  sortColumn(column: string): void {
    //if they clicked on teh same column (after they clicked on it to sort)
    //column = lastName and sortcriteria is lastName
    if(column == this.sortCriteria) {
      //sort by ascending and then flip it if they click the button again
      this.ascSequence = !this.ascSequence;
      return;
    }
    //if they click on a different column, set it to ascending sequence
    this.sortCriteria = column;
    this.ascSequence = true;//ascending sequence
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => { console.log(res);
      this.users = res as User[];
    },
    err => { console.error(err); }
    );
  }
}
