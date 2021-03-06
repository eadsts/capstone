import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {

    product: Product;
    vendor: Vendor;
    vendors: Vendor[] = [];

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService

  ) { }

  save(): void {
    //turns vendorId from a string into a number using the + sign
    this.product.vendorId = +this.product.vendorId;
    console.log(this.product);
    this.productsvc.change(this.product).subscribe(
      res => {
        console.debug("Product Edited:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => { console.error("Error editing user: ", err); }
    );
      //change and subscribe function for vendor

  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;

    //read list of vendors, if successful, display in list
    this.vendorsvc.list().subscribe(
        res => { 
        console.debug(res); 
        this.vendors = res as Vendor[];
    },
      err => { console.error(err); }
    );

    //read list of products by id to edit one product
    this.productsvc.get(id).subscribe(
      res => { 
      console.debug(res);
      this.product = res;
    },
    err => { console.error(err); }
    );
  
  }

}


