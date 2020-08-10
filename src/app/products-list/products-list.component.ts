import { Product } from './../core/models/products';
import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public searchText: string;
  public chachProducts: Product[]=[];
  public sorts: string;
  public sortChange: Product[]=[]

  

  @Input()
  public products: Product[] = [];

  public selectedProduct: Product;

  constructor() { 
   this.chachProducts = this.products = [
      new Product(1,"nikon","Nikon is perhaps most well known for its reputation as a world leader in imaging products,",1500,'https://www.masterfoto.lv/90066-large_default/Canon-760d-18135-IS-STM-kamera-kit.jpg'),
      new Product(2,'Canon',"Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR)", 120,"https://mimelon.com/uploads/catalog/Product//x19.jpg"),
      new Product(3,"Sony","Sony also has a good but not as well known line of APS-C mirrorless cameras",780,'https://fdn.gsmarena.com/imgroot/news/19/08/sony-cameras/-727/gsmarena_001.jpg'),
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

  public searchresalt(searchText:string): void{
    this.products = this.chachProducts.filter((product:Product)=>{
      return product.title.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }

  public toSort(sortChange:string): void{

    if(this.sorts === "expensive"){
      this.products = this.chachProducts.sort(function(a, b){
        return a.price - b.price
      }
        )
    }
    else if(this.sorts === "cheap"){
      this.products = this.chachProducts.sort(function(a, b){
        return  b.price-a.price
      }
        )
    } else if(this.sorts === "start"){
      this.products = this.chachProducts.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      
    }
    else if(this.sorts === "finsh"){
      this.products = this.chachProducts.sort(function (a, b) {
        return b.title.localeCompare(a.title);
      });
      
    }   
}

}
