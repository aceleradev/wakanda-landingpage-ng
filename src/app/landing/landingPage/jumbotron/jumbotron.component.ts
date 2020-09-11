import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }

  scroll(id: string) {
    this.scroller.scrollToAnchor(id);
  }

}
