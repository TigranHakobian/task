import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl ,  Validators} from '@angular/forms';
import{ ProductsService } from '../../core/services/products.service';
import { Router } from '@angular/router';
import{ User } from '../../core/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public registerForm:FormGroup;
  public users: User[];
  public loginForm: FormGroup;
  public _subscription: Subscription;
  public wrongLogin: boolean = false;
  public wrongPassword: boolean = false;
  

  constructor(public fb:FormBuilder, private dataService:ProductsService, public router:Router) {
    this.loginForm = this.fb.group({
      login: new FormControl(),
      password: new FormControl()
    });
   }

  public user : User[]
  public LoginUsers():void{
 
    const login:string = this.loginForm.controls.email.value;
    const password:string = this.loginForm.controls.password.value;
   
    const foundUser:User = this.users.find((item)=> item.login === login)

   if(foundUser){
      if(foundUser.password === password){
        if(foundUser.login === login){   
          localStorage.removeItem('reg');
          localStorage.removeItem('log');
          localStorage.setItem("home","somevalue")
        this.router.navigateByUrl("/home")
      }
      }
      else{
        this.wrongPassword = true
        setTimeout(() => {
          this.wrongPassword = false;
        }, 3000);
      }
    }else{
      this.wrongLogin = true
      setTimeout(() => {
        this.wrongLogin = false;
      }, 2000);

    }
  }

  public getAllUsers():void{
    this.dataService.getJson()
    .subscribe((response)=>{
      this.users  = response.users
    },(error)=>{
      console.log(error)
    }) 
  }

  ngOnInit(): void {
     this.loginForm = this.fb.group({
      first_name: new FormControl,
      phone: new FormControl,
      email: new FormControl,
      password: new FormControl,
     })
    this.getAllUsers()
  }
  


}
