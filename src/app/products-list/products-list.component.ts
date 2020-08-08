import { Product } from './../core/models/products';
import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input()
  public products: Product[] = [];

  public selectedProduct: Product;

  constructor() { 
    this.products = [
      new Product(1,"nikon","Nikon is perhaps most well known for its reputation as a world leader in imaging products,",'1500$','https://www.bhphotovideo.com/images/images1500x1500/nikon_1576b_d5600_dslr_camera_with_1365770.jpg'),
      new Product(2,'Canon',"Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR)", "1200$","https://mimelon.com/uploads/catalog/Product//x19.jpg"),
      new Product(3,"Sony","Sony also has a good but not as well known line of APS-C mirrorless cameras",'780$','https://fdn.gsmarena.com/imgroot/news/19/08/sony-cameras/-727/gsmarena_001.jpg'),
    ]
  }

  ngOnInit(): void {
  }
  public getSelectedProduct(product:Product):void{
    this.selectedProduct = product;
  }

  public isSelected(product:Product):boolean{
    if(product && this.selectedProduct && product.id === this.selectedProduct.id){
      return true;
    }
    return false;
  }

}
