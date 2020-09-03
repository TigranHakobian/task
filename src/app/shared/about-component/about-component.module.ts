import { AuthGuard } from './auth.guard';
import { AboutComponentRoutingModule } from './about-component-routing';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        AboutComponentRoutingModule
    ],
    providers:[AuthGuard]
})

export class AboutComponentModule{
    
}