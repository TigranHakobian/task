import { NotFoundComponentComponent } from './not-found-component.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const nfRouter: Routes = [{path:"",component: NotFoundComponentComponent}]

@NgModule({
    imports:[
        RouterModule.forChild(nfRouter)
    ],
    exports:[
        RouterModule
    ]
})


export class NotFoundRoutingModule{}