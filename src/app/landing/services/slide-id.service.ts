import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideIdService {

  private idSubject: BehaviorSubject<string> = new BehaviorSubject<string> ('0');

  constructor() { }

  getId() {
    return this.idSubject.asObservable();
  }

  setId(id:string) {
    console.log(id)
    this.idSubject.next(id);
  }
}
