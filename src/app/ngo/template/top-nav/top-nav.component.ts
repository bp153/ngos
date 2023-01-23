import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',

  styleUrls: ['./top-nav.component.scss'],

})
export class TopNavComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

  clickme(){
    console.log(675657)
  }

}
