import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private service: ApiService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  product: any;
  id: string = '';
  copyToClipboard: string= '';

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.service.getProduct(id).subscribe((product) => {
      this.product = product[0];
      console.log(this.product);
    });
  }

  addToCart() {
    this.cartService.addItem();
  }

  getLink(id: string): string {
    this.copyToClipboard = `localhost:4200/product/${id}`
    return this.copyToClipboard;
  }
}
