import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  private tabSet: NgbTabset;
  materialTotal1: any;
  laborTotal1: any;
  grandTotal1: any;

  materialTotal2: any;
  laborTotal2: any;
  grandTotal2: any;

  materialTotal3: any;
  laborTotal3: any;
  grandTotal3: any;

  materialTotal4: any;
  laborTotal4: any;
  grandTotal4: any;

  @ViewChild(NgbTabset) set content(content: NgbTabset) {
    this.tabSet = content;
  };

  constructor() {
    this.materialTotal1 = 210;
    this.laborTotal1 = 10;
    this.grandTotal1 = this.materialTotal1 + this.laborTotal1;

    this.materialTotal2 = 220;
    this.laborTotal2 = 30;
    this.grandTotal2 = this.materialTotal2 + this.laborTotal2;

    this.materialTotal3 = 240;
    this.laborTotal3 = 40;
    this.grandTotal3 = this.materialTotal3 + this.laborTotal3;

    this.materialTotal4 = 270;
    this.laborTotal4 = 50;
    this.grandTotal4 = this.materialTotal4 + this.laborTotal4;
   }

  ngAfterViewInit() {
    console.log(this.tabSet.activeId);
  }

  ngOnInit() {
  }

  onChange(event) {
    if(event !== null) {
      this.grandTotal1 = (+this.materialTotal1) + (+this.laborTotal1);
      this.grandTotal2 = (+this.materialTotal2) + (+this.laborTotal2);
      this.grandTotal3 = (+this.materialTotal3) + (+this.laborTotal3);
      this.grandTotal4 = (+this.materialTotal4) + (+this.laborTotal4);
    }
  }

}
