import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTribesComponent } from './carousel-tribes.component';

describe('CarouselTribesComponent', () => {
  let component: CarouselTribesComponent;
  let fixture: ComponentFixture<CarouselTribesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTribesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTribesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
