import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { isUndefined } from 'util';
import { SlideIdService } from 'src/app/landing/services/slide-id.service';

@Component({
  selector: 'app-carousel-tribes',
  templateUrl: './carousel-tribes.component.html',
  styleUrls: ['./carousel-tribes.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselTribesComponent implements OnInit {
  @ViewChild(NgbCarousel) carousel: NgbCarousel;
  constructor(
    private slideIdService: SlideIdService,
    config:NgbCarouselConfig) {
      config.showNavigationArrows=false;
      config.keyboard=false;
    }

  ngOnInit() {
    this.carousel.pause();
    this.slideIdService.getId().subscribe(id => {
      console.log("id ativo: " + this.carousel.activeId)
      if (isUndefined(id)) {
        console.log("o id: " + id + ", é indefinido");
      } else {
        this.selectSlide(id);
      }
    });
  }

  selectSlide(slideId: string) {
    if (slideId != '0') {
      this.carousel.select(slideId);
    }
  }

}
