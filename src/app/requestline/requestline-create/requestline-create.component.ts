import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLinesComponent } from 'src/app/request/request-lines/request-lines.component';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestline.class';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {
  rId: number = 0;
  requestline: Requestline = new Requestline();
  requestId: number;
  product: Product[] = [];
  productId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestlinesvc: RequestlineService,
    private prodsvc: ProductService
  ) { }

  save(): void {
    this.requestline.requestId = +this.rId;
    this.requestline.productId = +this.requestline.productId;
    console.debug(this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe(
      res => { console.debug(res); this.router.navigateByUrl('/lines/${this.rId}`);')},
      err => { console.error(err); }
    )
  }

  ngOnInit(): void { 
    this.rId = this.route.snapshot.params.id;
    this.requestline.requestId = +this.rId;
    this.prodsvc.list().subscribe(
      res => { console.debug(res); this.product = res as Product[]; },
      err => { console.error(err); }
    )
  }

}
