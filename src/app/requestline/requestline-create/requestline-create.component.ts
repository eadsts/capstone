import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLinesComponent } from 'src/app/request/request-lines/request-lines.component';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {
  rId: number = 0;
  requestId: number;
  requestline: RequestLinesComponent;
  requestlinesvc: RequestlineService;
  prodsvc: ProductService;
  products: string = "";
  product: Product[] = [];
  productId: number;

  constructor(
    private route: Router,
    private router: ActivatedRoute
  ) { }

  save(): void {
    this.requestline.requestId = +this.rId;
    this.requestline.productId = +this.requestline.productId;
    console.debug(this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe(
      res => { console.debug(res); this.router.navigateByUrl('/requests/lines/${this.rId}`);')},
      err => { console.error(err); }
    )
  }

  ngOnInit(): void { 
    this.rId = this.route.snapshot.params.rid;
    this.prodsvc.list().subscribe(
      res => { console.debug(res); this.products = res as Product[]; },
      err => { console.error(err); }
    )
  }

}
