import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Requestline } from 'src/app/requestline/requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { SystemService } from 'src/app/core/system.service';
import { Console } from 'console';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  request: Request;
  requestlines: Requestline[] = [];
  linesforRequest = [];
  tableStyle: string = "table table-sm";

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService,
    private sysSvc: SystemService

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
    let userid = this.sysSvc.loggedInUser.id;
    this.requestsvc.allRequestsForReview(userid).subscribe(
      res => {
        console.debug("All request lines", res);
        this.router.navigateByUrl("/requests/review");
      },
        err => { console.error("Error retrieving lines to review: ", err); }
    );
  }


}
