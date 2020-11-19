import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})

export class UserSearchPipe implements PipeTransform {
//pass in type of User[]
//second parameter is retrieving data from teh search box
//that the user types in 
//return a User[] of one or more users
  transform(users: User[], searchCriteria: string = ""): User[] {
    if(searchCriteria == "")
      return users;
    //let user type in upper or lower case and convert to lower case
    searchCriteria = searchCriteria.toLowerCase();
    //the search for users be stored in an array, but set it equal to 
    //an empty array first
    let selectedUsers: User[] = [];
    //if selected user id converted to string includes the search criteria
    //add it (push) to the selected list of users
    //if user types in 7, it will bring back 71, 79, 0376, etc
    //if user types in a it brings back alice, or ANT
    for(let user of users) {
      if(
        user.id.toString().includes(searchCriteria) ||
        user.username.toLowerCase().includes(searchCriteria) ||
        user.firstName.toLowerCase().includes(searchCriteria) ||
        user.lastName.toLowerCase().includes(searchCriteria) 
      ) {
        selectedUsers.push(user);
      }
    }
    return selectedUsers;
  }
}

