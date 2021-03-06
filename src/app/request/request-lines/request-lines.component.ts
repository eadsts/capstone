import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Requestline } from 'src/app/requestline/requestline.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})

export class RequestLinesComponent implements OnInit {

  request: Request;
  rId: number = 0;
  requestId: number;
  tableStyle: string = "table table-sm";
  
  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  //needs to navigate to review-item.component.ts
  submitForReview(): void {
    this.requestsvc.submitForReview(this.request.id, this.request).subscribe(
      res => {
        console.debug("Request to review:", res);
        this.refresh();
      },
      err => { console.error("Error reviewing item: ", err); }
    );
  }

  refresh(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => { console.debug(res); this.request = res; },
      err => { console.error(err); }
    );
  }

  createUserName(request: Request): void {
    request.username = `${request.user.lastName}, ${request.user.firstName}`;
  }

  // total(): void {
  //   this.request.total = this.requestline.quantity*this.product.price;
  // }

  remove(line: Requestline): void {
    console.debug(`Deleting line id ${line.id}`);
    line.product = null;
    this.requestlinesvc.remove(line).subscribe(
      res => { this.refresh(); },
      err => { console.error(err); }
    );
  }

  // linetotal(): void {
    
  // }
}