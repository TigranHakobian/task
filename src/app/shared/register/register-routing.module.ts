import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const regRouter: Routes = [{path:"",component: RegisterComponent}]

@NgModule({
    imports:[
        RouterModule.forChild(regRouter)
    ],
    exports:[
        RouterModule
    ]
})


export class RegisterRoutingModule{

}