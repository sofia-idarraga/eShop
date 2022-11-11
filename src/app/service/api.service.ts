import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl ='http://localhost:3000/products';

  getProducts(){
    return this.http.get<any>(this.baseUrl)
  }

  getProduct(id: string| null){
    return this.http.get<any>(this.baseUrl+ `?id=${id}`)
  }

}
