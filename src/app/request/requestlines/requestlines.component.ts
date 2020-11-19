import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Requestlines } from 'src/app/requestline/requestline.class';

@Component({
  selector: 'app-requestlines',
  templateUrl: './requestlines.component.html',
  styleUrls: ['./requestlines.component.css']
})
export class RequestlinesComponent implements OnInit {
  
  requests: Request[] = [];
  requestlines: Requestline[] = [];

  constructor(
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.requestsvc.requestForReview().subscribe(
      res => { console.log(res);
      this.requests = res as Request[];
    },
    err => { console.error(err); }
    );

    this.requestsvc.submitForReview().subscribe(
      res => { console.log(res);
      this.requestlines = res as Requestlines[];
    },
      err => { console.error(err); }
    );

  }

}
