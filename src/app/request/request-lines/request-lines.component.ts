import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Requestline } from 'src/app/requestline/requestline.class';
import { Product } from 'src/app/product/product.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})

export class RequestLinesComponent implements OnInit {

  request: Request;
  rId: number = 0;
  requestId: number;


  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  submitForReview(): void { 
  }

  refresh(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe (
      res => { this.createUserName(res); console.debug(res); this.request = res; },
      err => { console.error(err);}
    );
  }

  createUserName(request: Request): void {
    request.username = `${request.user.lastName}, ${request.user.firstName}`;
  }

  delete(line: Requestline): void {
    console.debug(`Deleting line id ${line.id}`);
    this.requestlinesvc.remove(line).subscribe(
      res => { this.refresh(); },
      err => { console.error(err); }
    );
  }
}