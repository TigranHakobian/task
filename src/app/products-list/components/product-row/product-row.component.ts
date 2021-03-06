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

  @Output()
  public productForEdit: EventEmitter<any> = new EventEmitter();

  public namsArr : string[]= ["E19", "B12", "A3"]

  constructor() {}

  public showProduct(): void {
    fruits = [];
    fruits.push(this.product);
  }

  public getDetails(): void {
    this.selectedProduct.emit(this.product);
  }

  public editProduct(): void {
    this.productForEdit.emit(this.product);
  }
}

let fruits: Array<any> = [];
