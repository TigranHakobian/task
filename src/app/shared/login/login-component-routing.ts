import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

const fpRouter: Routes = [{path:"",component: LoginComponent}]

@NgModule({
    imports:[
        RouterModule.forChild(fpRouter)
    ],
    exports:[
        RouterModule
    ]
})


export class LoginRoutingModule{

}