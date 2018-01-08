import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-btn',
  templateUrl: './quote-btn.component.html',
  styleUrls: ['./quote-btn.component.css']
})
export class QuoteBtnComponent implements OnInit {
  
  vote:number = 0
  dvote:number = 0;


downvote(){
  this.dvote = this.dvote - 1;
}
upvote(){
  this.vote = this.vote + 1;
}
  constructor() { }

  ngOnInit() {
  }

}
