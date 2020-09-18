import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeCadastroComponent } from './modal-de-cadastro.component';

describe('ModalDeCadastroComponent', () => {
  let component: ModalDeCadastroComponent;
  let fixture: ComponentFixture<ModalDeCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
