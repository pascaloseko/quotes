import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() isComplete= new EventEmitter<boolean>();
   vote:number = 0
  quotes = [
    new Quotes(1,"What you do makes a difference, and you have to decide what kind of difference you want to make","+1",new Date(2018,3,14)),
    new Quotes(2,"Think Big And Don’t Listen To People Who Tell You It Can’t Be Done. Life’s Too Short To Think Small","+2",new Date(2018,6,9)),
    new Quotes(3,"It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going","+3",new Date(2018,1,12)),
    new Quotes(4,"You Can Develop Any Habit Or Thought Or Behavior That You Consider Desirable Or Necessary","+1",new Date(2018,0,18)),
    new Quotes(5,"We Become What We Think About","+2",new Date(2018,2,14)),
  ]

upvote(index){
   alert("blah")
}
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}
deleteQuote(isComplete,index){
  if(isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].id}`);

    if(toDelete){
      this.quotes.splice(index, 1);
    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
