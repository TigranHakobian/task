import { HomeGGuard } from './guard/home-g.guard';
import { HomeComponentComponent } from './home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const regRouter: Routes = [{path:"",canActivate:[HomeGGuard],component: HomeComponentComponent}]

@NgModule({
    imports:[
        RouterModule.forChild(regRouter)
    ],
    exports:[
        RouterModule
    ]
})


export class homeRoutingModule{

}