import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public totalItems = new BehaviorSubject<number>(0);

  constructor() { }

  addItem(){
    this.totalItems.next(this.totalItems.value+1)
  }

  getTotal(){
    return this.totalItems;
  }
}
