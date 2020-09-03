import { HomeGGuard } from './guard/home-g.guard';
import { TostringPipe } from './../pipes/tostring.pipe';
import { ProductsListComponent } from './../../products-list/products-list.component';
import { homeRoutingModule } from './home-routing.module';
import { HomeComponentComponent } from './home-component.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductRowComponent } from 'src/app/products-list/components/product-row/product-row.component';

@NgModule({
declarations: [
HomeComponentComponent,
ProductsListComponent,
ProductRowComponent,
TostringPipe,
],
imports: [
CommonModule,
FormsModule,
ReactiveFormsModule,
RouterModule,
homeRoutingModule,
],
exports:[
TostringPipe
],
providers:[HomeGGuard],
bootstrap: [HomeComponentComponent],
})
export class HomeModule {}