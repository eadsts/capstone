import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Requestlines } from 'src/app/requestline/requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  request: Request;
  requestlines: Requestlines[] = [];
  linesforRequest = [];

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService

  ) { }

  //display a list of requests in REVIEW status
  // Each request will have an action called 'Review' 
  // which when clicked will navigate to the request-review-item component.

  review(): void {
      let id = +this.route.snapshot.params.id;
      this.requestlinesvc.get(id).subscribe(
        res => {
          console.debug("Request lines to review:", res);
          this.router.navigateByUrl("/requests/review");
        },
        err => { console.error("Error retrieving request lines: ", err); }
      );
    }

  ngOnInit(): void {
  }

}
