import { RegGGuard } from './regGuard/reg-g.guard';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const regRouter: Routes = [{path:"",canActivate:[RegGGuard],component: RegisterComponent}]

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