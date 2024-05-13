import { Component,  OnInit} from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  
  data: { productName: string, productPrice: number, productQuantity: number }[] = [];

  constructor(private fruitService: ProductServiceService) { }

  ngOnInit(): void{
    this.getProduct();
  }

  getProduct() {
    this.data =this.fruitService.productTable ;
    console.log("my product", this.data);
  }
}