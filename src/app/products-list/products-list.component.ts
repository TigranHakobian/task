import { Product } from './../core/models/products';
import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import{ FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms' 
import { from } from 'rxjs';

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

  public editTitle: string;
  public editDescription: string;
  public editPrice: number;

  public products: Product[] = [];
  @Input()
  public selectedProduct: Product;

  public editableProduct: Product | {};

  public editForm :FormGroup;

 


  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 1500);
   
  }

  public getAllProducts(): void {
    this.chachProducts = this.products = [
      new Product(
        1,
        'Nikon',
        'Nikon is perhaps most well known for its reputation as a world leader in imaging products,',
        1500,
        'https://www.primalucelab.com/media/catalog/product/cache/4/image/1000x/17f82f742ffe127f42dca9de82fb58b1/n/i/nikon_reflex_digitale_d5600a.jpg'
      ),
      new Product(
        2,
        'Canon',
        'Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR)',
        120,
        'https://mimelon.com/uploads/catalog/Product//x19.jpg'
      ),
      new Product(
        3,
        'Sony',
        'Sony also has a good but not as well known line of APS-C mirrorless cameras',
        780,
        'https://www.dpreview.com/files/p/E~products/sony_a7s/shots/977781aa771d42bb9db348c176542e02.png'
      )
    ];
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

  public toSort(sortChange: string): void {
    this.isLoading = true;
    setTimeout(() => {
      switch (this.sorts) {
        case 'expensive':
          this.products = this.chachProducts.sort(function(a, b) {
            return b.price - a.price;
          });
          break;
        case 'cheap':
          this.products = this.chachProducts.sort(function(a, b) {
            return a.price - b.price;
          });
          break;
        case 'start':
          this.products = this.chachProducts.sort(function(a, b) {
            return a.title.localeCompare(b.title);
          });
          break;
        case 'finsh':
          this.products = this.chachProducts.sort(function(a, b) {
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
