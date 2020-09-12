import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-de-cadastro',
  templateUrl: './modal-de-cadastro.component.html',
  styleUrls: ['./modal-de-cadastro.component.css']
})
export class ModalDeCadastroComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}
  
  ngOnInit() {
  }

}
