import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { setMaxListeners } from 'process';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  request: Request;
  tableStyle: string = "table table-sm";
  
  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => { console.debug(res); this.request = res; },
      err => { console.error(err); }
    );
  }
  
  // The Approve button will call the approve(res) function causing the 
  // status of the request to change to APPROVED
  approve(): void {
    this.requestsvc.approve(this.request.id, this.request).subscribe(
      res => { console.debug("Request to approve:", res);
      this.refresh();
      },
      err => { console.error("Error approving item: ", err); }
    );
  }


  // The Reject button will call the reject(res) function causing the status of 
  // the request to change to REJECTED. If a request is rejected, the reviewer is 
  // REQUIRED to enter some text in the rejectionReason property. A textbox for this 
  // data must be provided to the reviewer either displaying constantly on the page or 
  // can be revealed dynamically when the Reject button is clicked.
  reject(): void {
    this.requestsvc.reject(this.request.id, this.request).subscribe(
      res => { console.debug("Request to reject:", res);
      this.refresh();
      },
      err => { console.error("Error rejecting item: ", err); }
    );
  }
}
