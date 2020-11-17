import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

    product: Product = new Product();
    vendors: Vendor[] = [];

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService,
    private vendorsvc: VendorService
  ) { }

  save(): void {
    //turns string into number
    this.product.vendorId = +this.product.vendorId;
    console.log(this.product);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.debug("User Added:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => { console.error("Error creating product: ", err); }
    );
  }

  //read list of vendors
  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => { console.debug(res); 
      this.vendors = res as Vendor[];
    },
    err => { console.error(err); }
    );
  }
}






