import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[] = [];
    // searchCriteria: string = "";
    // sortCriteria: string = "lastName";
    // ascSequence: boolean = true;
    tableStyle: string = "table table-sm";


  constructor(
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res => { console.log(res);
      this.products = res as Product[];
    },
    err => { console.error(err); }
    );
  }

}

