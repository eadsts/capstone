import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLinesComponent } from 'src/app/request/request-lines/request-lines.component';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestline.class';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})

// This is a standard edit component which displays the requestline, 
// allows the user to change the product and/or quantity, click the Save 
// button, and, when successfully, navigate back to the request-lines component.
export class RequestlineEditComponent implements OnInit {
  rId: number = 0;
  requestline: Requestline = new Requestline();
  requestId: number;
  products: Product[] = [];
  productId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestlinesvc: RequestlineService,
    private prodsvc: ProductService
  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId;
    console.debug(this.requestline);
    this.requestlinesvc.change(this.requestline).subscribe(
      res => { console.debug(res); this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`); },
      err => { console.error(err); }
    )
  }

  ngOnInit(): void { 
    this.rId = this.route.snapshot.params.id;
    this.requestlinesvc.get(this.rId).subscribe(
      res => { console.debug(res); this.requestline = res; },
      err => { console.error(err); }
    );
    this.prodsvc.list().subscribe(
      res => { console.debug(res); this.products = res as Product[]; },
      err => { console.error(err); }
    )
  }

}

