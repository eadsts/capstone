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
    console.log(this.product);
    this.productsvc.change(this.product).subscribe(
      res => {
        console.debug("Product Edited:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => { console.error("Error editing user: ", err); }
    );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;

    //read list of vendors
    this.vendorsvc.list().subscribe(
        res => { 
        console.debug(res); 
        this.vendors = res as Vendor[];
    },
      err => { console.error(err); }
    );

    //read list of products
    this.productsvc.get(id).subscribe(
      res => { 
      console.debug(res);
      this.product = res;
    },
    err => { console.error(err); }
    );
  
  }

}


