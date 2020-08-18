import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './root/app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './products-list/components/product-row/product-row.component';
import { LoaderComponent } from './loader/loader.component';
import { BorderedBoxDirective } from './directives/bordered-box.directive';
import { BlockCopyPasteDirective } from './shared/directives/block-copy-paste.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductRowComponent,
    LoaderComponent,
    BorderedBoxDirective,
    BlockCopyPasteDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    BlockCopyPasteDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
