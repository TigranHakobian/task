import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule, Routes } from '@angular/router';

import { AppComponent } from './root/app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './products-list/components/product-row/product-row.component';
import { LoaderComponent } from './loader/loader.component';
import { BorderedBoxDirective } from './directives/bordered-box.directive';
import { BlockCopyPasteDirective } from './shared/directives/block-copy-paste.directive';
import { TostringPipe } from './shared/pipes/tostring.pipe';
import { HomeComponentComponent } from './shared/home-component/home-component.component';
import { NotFoundComponentComponent } from './shared/not-found-component/not-found-component.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import{ HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './shared/forget-password/forget-password.component'


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component: HomeComponentComponent},
  {path:'about',loadChildren: ()=> import('./shared/about-component/about-component.module').then(m => m.AboutComponentModule)},
  {path:'contact',loadChildren: ()=> import('./shared/contact-component/contact-component.module').then(m => m.ContactComponentModule)},
  {path:'forgetPassword', component: ForgetPasswordComponent},
  {path:'**', component: NotFoundComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductRowComponent,
    LoaderComponent,
    BorderedBoxDirective,
    BlockCopyPasteDirective,
    TostringPipe,
    HomeComponentComponent,
    NotFoundComponentComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports:[
    BlockCopyPasteDirective,
    TostringPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
