import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  //create a variable which is undefined
  vendor: Vendor;

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.vendor);
    this.vendorsvc.change(this.vendor).subscribe(
      res => {
        console.debug("Vendor Removed:", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => { console.error("Error editing vendor: ", err); }
    );
  }

  ngOnInit(): void {
    //make sure id is positive integer
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res => {
      console.debug("Vendor:", res);
      this.vendor = res;
      },
      err => { console.error(err) }
    );
  }
}

