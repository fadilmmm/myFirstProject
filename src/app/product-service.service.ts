import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productTable = [
    {productName :"Orange" ,productPrice : 20, productQuantity :5 },
    {productName :"PineApple" ,productPrice : 50, productQuantity :10 },
    {productName :"Fig" ,productPrice : 70, productQuantity :15 },
    {productName :"Banane" ,productPrice : 100, productQuantity :25 }
  ]

  constructor() { }
}
