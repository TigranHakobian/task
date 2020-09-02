import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [RegisterComponent],
imports: [
CommonModule,
FormsModule,
ReactiveFormsModule,
RouterModule,
RegisterRoutingModule
],
})
export class RegisterModule {

}