import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})

export class RequestEditComponent implements OnInit {

  request: Request;

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.request);
    this.requestsvc.change(this.request).subscribe(
      res => {
        console.debug("Request updated:", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => { console.error("Error editing request: ", err); }
    );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
      console.debug("Request:", res);
      this.request = res;
      },
      err => { console.error(err) }
    );
  }

}
