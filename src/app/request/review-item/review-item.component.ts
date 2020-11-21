import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  // The Approve button will call the approve(res) function causing the 
  // status of the request to change to APPROVED
  approve(): void {}

  // The Reject button will call the reject(res) function causing the status of 
  // the request to change to REJECTED. If a request is rejected, the reviewer is 
  // REQUIRED to enter some text in the rejectionReason property. A textbox for this 
  // data must be provided to the reviewer either displaying constantly on the page or 
  // can be revealed dynamically when the Reject button is clicked.
  reject(): void {}
}
