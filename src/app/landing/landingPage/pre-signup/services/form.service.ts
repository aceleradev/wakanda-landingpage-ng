import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { PreCadastro } from '../interface/pre-cadastro';
import * as environment from '../../../../../environments/environment.js';

const API_URL = environment.preCadUrl;

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  enviarFormulario(preCadastro: PreCadastro) {
    return this.http.post("/public/" + '', JSON.stringify(preCadastro), { observe: "response" });
  }
}
