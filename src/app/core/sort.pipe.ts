import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  //first value looked at is an array of unknown type, so use any[] for type
  //turn everything into a string for sortCriteria
  //return type is any[] type of array - vendors, users, etc.
  transform(arr : any[], sortCriteria: string = "", asc: boolean = true): any[] {
    if(sortCriteria == "") 
      return arr;
      //a and b are instances of hte itmes in an array 
      //(like instances of user with many properties)
      const sortFn = (a: any, b: any): number => {
        //a is insatnce of user object and [sortCriteria] returns value of the property
        let colA = a[sortCriteria];
        //if colA is a number leave it as a number, otherwise turn it into a string
        //in lowercase
        colA = (typeof colA) == "number" ? colA : colA.toString().toLowerCase();

        let colB = b[sortCriteria];
        colB = (typeof colB) == "number" ? colB : colB.toString().toLowerCase();

        if(colA === colB) return 0;
        if(colA < colB) {
          return (asc) ? -1 : 1;
        } else {
          return (asc) ? 1 : -1;
        }
      };
    
    return arr.sort(sortFn);
  }

}

