import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { SlideIdService } from '../../services/slide-id.service';

@Component({
  selector: 'app-tribes',
  templateUrl: './tribes.component.html',
  styleUrls: ['./tribes.component.css'],
  animations: [
    trigger('openClose', [

      state('open', style({
        transform: "scale(1.2)",
        boxShadow: "1px 1px 15px 1px #00FFFF"
      })),

      state('closed', style({})),

      transition('closed => open', [
        animate('0.2s')
      ]),
    ])
  ],
  providers: [NgbCarousel]
})
export class TribesComponent implements OnInit {

  constructor(private slideIdService: SlideIdService) { }
  isOpen: boolean = true;
  open: boolean[] = [false, false, false, false, false, false, false];

  ngOnInit() {
  }

  getSlideId(id: string) {
    console.log(id)
    this.slideIdService.setId(id);
    this.changeState(Number.parseInt(id));
  }

  changeState(i: number) {
    this.open.fill(false);
    console.log(this.open);
    this.open[i] = true;
  }

}
