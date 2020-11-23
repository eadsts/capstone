import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit {

  //stores all vendors in an array
  vendors: Vendor[] = [];
  searchCriteria: string = "";
  sortCriteria: string = "name";
  ascSequence: boolean = true;
  tableStyle: string = "table table-sm";
  loggedInUser: User;

  constructor(
    private vendorsvc: VendorService,
    private sysSvc: SystemService
  ) { }

  sortColumn(column: string): void {
    if(column == this.sortCriteria) {
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }

ngOnInit(): void {
  this.loggedInUser = this.sysSvc.loggedInUser;
  this.vendorsvc.list().subscribe(
    res => { console.log(res);
    this.vendors = res as Vendor[];
    console.log("all vendors", this.vendors);
  },
  err => { console.error(err); }
  );
}
}