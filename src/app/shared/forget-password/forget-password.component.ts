import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import{ User } from '../../core/models/user';
import{ ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public users: User[];
  public _subscription: Subscription;
  public forgetPassword:FormGroup;
  public wrongEmail:boolean;
  public wrongPassword:boolean;
  public wrongPhone:boolean;
  
  public phone:number;

  constructor(
    private usersService: ProductsService, private fb: FormBuilder,private _router: Router) {
    this.forgetPassword = this.fb.group(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ]),
        forgotPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]),
        forgotPasswordAgain: new FormControl('',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]),
        phone:new FormControl()
      },
    );
  }

  ngOnInit(): void {
  }

  public changePassword(): void {
    this.wrongEmail = false;
    this.wrongPhone = false;
    this.wrongPassword = false;

      let email: string = this.forgetPassword.controls.email.value; 
      let password: string =  this.forgetPassword.controls.forgotPassword.value;
      let passwordAgain = this.forgetPassword.controls.forgotPasswordAgain.value;
      let phone = this.forgetPassword.controls.phone.value;

      const item: User = this.usersService.users.find( item => item.login === email);

      if(item){
        if(passwordAgain === password){
          if(item.phone === phone){
            this.usersService.users.find( item => item.password = password)
            this._router.navigateByUrl('/home');
          }else{
            this.wrongPhone =true;
            setTimeout(()=>{
              this.wrongPhone =false;
            },2000 )
          }        
        }else{
          this.wrongPassword = true;
          setTimeout(()=>{
            this.wrongPassword =false;
          },2000)
        }    
      }
      else{
        this.wrongEmail = true;
        setTimeout(() => {
          this.wrongEmail = false;
        }, 3000);
      } 
  }
}
