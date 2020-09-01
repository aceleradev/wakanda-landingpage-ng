import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTribesComponent } from './list-tribes.component';

describe('ListTribesComponent', () => {
  let component: ListTribesComponent;
  let fixture: ComponentFixture<ListTribesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTribesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTribesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
