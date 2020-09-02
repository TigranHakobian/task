import { NotFoundRoutingModule } from './shared/not-found-component/not-found-routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './root/app.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { BorderedBoxDirective } from './directives/bordered-box.directive';
import { BlockCopyPasteDirective } from './shared/directives/block-copy-paste.directive';
import { HttpClientModule } from '@angular/common/http';
// RegisterModule
const appRoutes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
path: 'login',
loadChildren: () =>
import('./shared/login/login-compnent.module').then((m) => m.LoginModule),
},
{
path: 'register',
loadChildren: () =>
import('./shared/register/register.module').then((m) => m.RegisterModule),
},
{
path: 'home',
loadChildren: () =>
import('./shared/home-component/home.module').then((m) => m.HomeModule),
},
{
path: 'about',
loadChildren: () =>
import('./shared/about-component/about-component.module').then(
(m) => m.AboutComponentModule
),
},
{
path: 'contact',
loadChildren: () =>
import('./shared/contact-component/contact-component.module').then(
(m) => m.ContactComponentModule
),
},
{
path: 'forgetPassword',
loadChildren: () =>
import('./shared/forget-password/forget-password.module').then(
(m) => m.ForgetPasswordModule
),
},
{ path: '**', loadChildren: () =>
import('./shared/not-found-component/not-found.module').then(
(m) => m.NotFoundModule
)
},
];

@NgModule({
declarations: [
AppComponent,
HeaderComponent,
LoaderComponent,
BorderedBoxDirective,
BlockCopyPasteDirective,
],

imports: [
BrowserModule,
FormsModule,
ReactiveFormsModule,
HttpClientModule,
RouterModule.forRoot(appRoutes),
],
exports: [BlockCopyPasteDirective],
providers: [],
bootstrap: [AppComponent],
})
export class AppModule {}