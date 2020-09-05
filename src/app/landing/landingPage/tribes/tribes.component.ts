import { Component, OnInit } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { SlideIdService } from '../../services/slide-id.service';

@Component({
  selector: 'app-tribes',
  templateUrl: './tribes.component.html',
  styleUrls: ['./tribes.component.css'],
  providers: [NgbCarousel]
})
export class TribesComponent implements OnInit {

  constructor(private slideIdService: SlideIdService) { }
  private active: boolean = false;

  ngOnInit() {
  }

  getSlideId(id: string) {
    console.log(id)
    this.slideIdService.setId(id);
  }

}
