import { ForgetPasswordComponent } from './forget-password.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForgetPasswordRoutingModule } from './forget-password-routing.module';

@NgModule({
declarations: [ForgetPasswordComponent],
imports: [
CommonModule,
FormsModule,
ReactiveFormsModule,
RouterModule,
ForgetPasswordRoutingModule,
],
})
export class ForgetPasswordModule {}