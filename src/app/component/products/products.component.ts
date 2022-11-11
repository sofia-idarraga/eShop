import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private service: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: any[] = [];
  copyToClipboard: string = '';

  getProducts(): void {
    this.service
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  addToCart() {
    this.cartService.addItem();
  }

  getLink(id: string): string {
    this.copyToClipboard = `localhost:4200/product/${id}`;
    return this.copyToClipboard;
  }
}
