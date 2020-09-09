import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const API_URL = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { }

  interface(name: string, telephone: string, email: string){
       return this.http.post(API_URL + '', {name, telephone, email})
  }
}
