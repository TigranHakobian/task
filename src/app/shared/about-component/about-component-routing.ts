import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component.component';
import { NgModule } from '@angular/core';

const AboutRouter: Routes = [{path:"",component: AboutComponentComponent}]

@NgModule({
    imports:[
        RouterModule.forChild(AboutRouter)
    ],
    exports:[
        RouterModule
    ]
})


export class AboutComponentRoutingModule{}