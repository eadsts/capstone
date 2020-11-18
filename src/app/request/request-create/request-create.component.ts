import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})

export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.request);
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.debug("Request Added:", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => { console.error("Error creating request: ", err); }
    );
  }

  ngOnInit(): void {
    
  }

}
