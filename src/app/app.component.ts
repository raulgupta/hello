import { Component } from '@angular/core';
import { Fact } from './model/fact.model';
import { Rev } from './model/reverse.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title='Word Order Reverser';
  private pnum:number=0;
  private result:number=0;
  private results:Fact[]=[];
  private sno:number=1;

  private inputString:string='Hello World';
  private resultString:string='World Hello';
  private strResults:Rev[]=[];

  public deleteRev(data) {
    this.strResults = this.strResults.filter(val => val!=data);
  }
  
  public revOrder() {
    console.log('revOrder is called!!!!!')
    let rev=this.inputString.split(' ').reverse().join(' ');
    this.resultString=rev;
    let row = new Rev(this.sno,this.inputString,rev);
    this.strResults.push(row);
    this.sno=this.sno+1;
  }
  
  public deleteFact(data): void {
    this.results=this.results.filter(t => t!=data);
    console.log(data);
  }
  
  public calFact(): void {
    console.log('calFact() is called!!!!!!');
    let fact=1;
    for(let x=2;x<=this.pnum;x++) {
      fact=x*fact;
    }
    this.result=fact;
    let row = new Fact(this.sno,this.pnum,fact);
    this.results.push(row);
    this.sno=this.sno+1;
  }
}
