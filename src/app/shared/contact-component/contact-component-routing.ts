import { CheckTokenGuard } from './../../core/guards/check-token.guard';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ContactComponentComponent } from './contact-component.component';
import { NgModule } from '@angular/core';


const ContactRouter: Routes = [{path:"",canActivate:[CheckTokenGuard], component: ContactComponentComponent}]

@NgModule({
    imports:[
        RouterModule.forChild(ContactRouter)
    ],
    exports:[
        RouterModule
    ]
})


export class ContactComponentRoutingModule{
    
}