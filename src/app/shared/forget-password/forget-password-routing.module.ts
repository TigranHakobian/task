import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';
import { NgModule } from '@angular/core';

const fpRouter: Routes = [{path:"",component: ForgetPasswordComponent}]

@NgModule({
    imports:[
        RouterModule.forChild(fpRouter)
    ],
    exports:[
        RouterModule
    ]
})


export class ForgetPasswordRoutingModule{

}