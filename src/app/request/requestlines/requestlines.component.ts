import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Requestlines } from 'src/app/requestline/requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';

@Component({
  selector: 'app-requestlines',
  templateUrl: './requestlines.component.html',
  styleUrls: ['./requestlines.component.css']
})
export class RequestlinesComponent implements OnInit {
  
  request: Request;
  requestlines: Requestlines[] = [];
  linesforRequest = [];

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService
  ) { }

  ngOnInit(): void {
    //1-get request for id passed in url
    let id = +this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => { console.log(res); 
        this.request = res as Request;
      },
      err => { console.error(err); }
    );
      //2-get all request lines for the above request
      //get all request lines in an array
      //do a for loop and get request lines that match the request
    // this.requestlinesvc.get(id).subscribe(
    //   for(let rl of requestlines) {
    //     if(requestId == requestlines.request.id) {
    //       push(requestId).linesforRequest[]
    //   }
    // }
    //   // res => { console.log(res);
      
    // },
    //   err => { console.error(err); }
    // );

  }

}
