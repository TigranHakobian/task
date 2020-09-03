import { LogGGuard } from './logG/log-g.guard';
import { LoginRoutingModule } from './login-component-routing';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [LoginComponent],
imports: [
CommonModule,
FormsModule,
ReactiveFormsModule,
RouterModule,
LoginRoutingModule,
],
providers:[LogGGuard]
})
export class LoginModule {}