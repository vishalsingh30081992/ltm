import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private tabSet: NgbTabset;

  @ViewChild(NgbTabset) set content(content: NgbTabset) {
    this.tabSet = content;
  };
  
  constructor() { }

  ngAfterViewInit() {
    console.log(this.tabSet.activeId);
  }
  
  ngOnInit() {
  }

}
