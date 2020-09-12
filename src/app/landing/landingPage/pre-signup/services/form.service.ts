import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PreCadastro } from '../interface/pre-cadastro';

const API_URL = 'https://run.mocky.io/v3/00f7ac3d-327a-4a02-9bd2-e99dbf1312e1';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  enviarFormulario(preCadastro: PreCadastro) {
    return this.http.post(API_URL + '', { preCadastro }, { observe: "response" });
  }
}
