import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  products: any[] = [];

  getProducts(): void{
    this.service.getProducts()
    .subscribe(products => this.products = products);
  }

}
