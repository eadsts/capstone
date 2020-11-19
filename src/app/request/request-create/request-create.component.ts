import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})

export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  user: User;

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private sysSvc: SystemService
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
    //get the logged in user
    this.user = this.sysSvc.loggedInUser;
    //set the logged in user in this.request
    this.request.user = this.user;
  }
}
