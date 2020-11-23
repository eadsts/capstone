import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[] = [];
    searchCriteria: string = "";
    sortCriteria: string = "vendorName";
    ascSequence: boolean = true;
    tableStyle: string = "table table-sm";
    loggedInUser: User;


  constructor(
    private productsvc: ProductService,
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

  createVendorName(products: Product[]) : void {
    for(let product of products) {
      product.vendorName = product.vendor.name;
    }

  }
  ngOnInit(): void {
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.productsvc.list().subscribe(
      res => { console.log(res);
      this.createVendorName(res);
      this.products = res as Product[];
    },
    err => { console.error(err); }
    );
  }

}

