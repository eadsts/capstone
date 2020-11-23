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
  
  approve(): void {
    this.requestsvc.approve(this.request.id, this.request).subscribe(
      res => { console.debug("Request to approve:", res);
      this.refresh();
      },
      err => { console.error("Error approving item: ", err); }
    );
  }

  reject(): void {
    this.requestsvc.reject(this.request.id, this.request).subscribe(
      res => { console.debug("Request to reject:", res);
      this.refresh();
      },
      err => { console.error("Error rejecting item: ", err); }
    );
  }
}
