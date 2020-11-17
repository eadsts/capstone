import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit {

  //stores all vendors in an array
  vendors: Vendor[] = [];
  // searchCriteria: string = "";
    // sortCriteria: string = "Name";
    // ascSequence: boolean = true;
  tableStyle: string = "table table-sm";

  constructor(
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => { console.log(res);
      this.vendors = res as Vendor[];
    },
    err => { console.error(err); }
    );
  }

}

