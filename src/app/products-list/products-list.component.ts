import { Product } from './../core/models/products';
import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import{ FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms' ;
import{ProductsService} from '../core/services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public searchText: string;
  public chachProducts: Product[] = [];
  public sorts: string;
  public sortChange: Product[] = [];
  public isLoading: boolean = true;

  public selectedValue;

  public editTitle: string;

  public editDescription: string;

    public editPrice: number;

  public products: Product[] = [];
  @Input()
  public selectedProduct: Product;

  public editableProduct: Product | {};

  public editForm :FormGroup;



 


  constructor(private fb : FormBuilder, private productsService:ProductsService,public router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 1500);
    
  }

  public getAllProducts(): void {
    this.productsService.getJson()
    .subscribe((response)=>{
      this.products = this.chachProducts = response.products
    },(error)=>{
      console.log(error)
    })
    this.isLoading = false;
  }

  public isObjectEmpty(obj: Product | {}) {
    if (obj === undefined) {
      return true;
    }
    return Object.keys(obj).length === 0;
  }

  public getProductForEdit(product: Product): void {
    this.editableProduct = product;
    this.editForm = this.fb.group({
      editTitle : new FormControl(product.title,[Validators.required]),
      editDescription : new FormControl(product.description,[Validators.required, Validators.minLength(10),Validators.maxLength(100)]),
      editPrice : new FormControl(product.price,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    })
  }

  public saveValues(id: number): void {
    this.isLoading = true;
    const  formValues :any = this.editForm.value;

    setTimeout(() => {
      const index = this.products.findIndex(item => item.id === id);
      const editingProduct = this.products[index];

      editingProduct.title = formValues.editTitle;
      editingProduct.description = formValues.editDescription;
      editingProduct.price = formValues.editPrice;
      this.editableProduct = {};
      this.isLoading = false;
    }, 1000);
  }

  public getSelectedProduct(product: Product): void {
    this.selectedProduct = product;
  }

  public isSelected(product: Product): boolean {
    if (
      product &&
      this.selectedProduct &&
      product.id === this.selectedProduct.id
    ) {
      return true;
    }
    return false;
  }

  public searchresalt(searchText: string): void {
    this.isLoading = true;
    setTimeout(() => {   
      this.products = this.chachProducts.filter((product: Product) => {
        return product.title
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
      this.isLoading = false;
    }, 1200);
  }

  public getCategory(selectedValue: string): void {
    this.products = this.chachProducts;
    this.isLoading = true;
    setTimeout(() => {
      this.products = this.chachProducts.filter((item)=> item.category === this.selectedValue);
      this.router.navigateByUrl(`/home?category=${selectedValue}`); 
      this.isLoading = false;
    }, 1200);
  }
  
  

  public toSort(sortChange: string): void {
    // this.searchresalt("on");
    this.products = this.chachProducts;
    this.isLoading = true;
    setTimeout(() => {
      switch (this.sorts) {
        case 'expensive':
          this.products.sort(function(a, b) {
            return b.price - a.price;
          });
          break;
        case 'cheap':
          this.products.sort(function(a, b) {
            return a.price - b.price;
          });
          break;
        case 'start':
          this.products.sort(function(a, b) {
            return a.title.localeCompare(b.title);
          });
          break;
        case 'finsh':
          this.products.sort(function(a, b) {
            return b.title.localeCompare(a.title);
          });
          break;
      }
      this.isLoading = false;
    }, 1200);
  }

  public currentInput;

  onFileSelected(event) {
    this.isLoading = true;
    setTimeout(() => {
      this.products = this.chachProducts.filter((product: Product) => {
        return this.currentInput
          .toLowerCase()
          .includes(product.title.toLowerCase());
      });
      this.isLoading = false;
    }, 1200);
  }
}
