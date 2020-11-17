import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
    // need to create a new instance of vendor
    vendor: Vendor = new Vendor();

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.vendor);
    this.vendorsvc.create(this.vendor).subscribe(
      res => {
        console.debug("Vendor Added:", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => { console.error("Error creating vendor: ", err); }
    );
  }

  //don't need anything here since we are creating a new vendor
  ngOnInit(): void {
  }
}
