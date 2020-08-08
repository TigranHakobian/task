import { Product } from './../../../core/models/products';
import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})



export class ProductRowComponent {

  @Input()
  public product: Product;

  @Output()
  public selectedProduct: EventEmitter<any> = new EventEmitter();
  
  constructor() {}

 

  public showProduct(): void {
    fruits =[]
    fruits.push(this.product)
    console.log(...fruits)
  }

  public getDetails(): void {
    this.selectedProduct.emit(this.product);
  }
  
}


let fruits: Array<any> = [];