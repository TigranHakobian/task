import { Router } from '@angular/router';
import{ User } from '../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl ,Validators} from '@angular/forms';
import{ ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb:FormBuilder, private dataService:ProductsService, public router:Router) { 

  }
  
  public users : User[]
  
  public registerForm:FormGroup;
  public registeredUser = false;
  public secondPassword =false;

  public registerUser():void{
    const name:string = this.registerForm.controls.first_name.value;
    const login:string = this.registerForm.controls.email.value;
    const password:string = this.registerForm.controls.password.value;
    const passConf:string = this.registerForm.controls.passConf.value;
    const phone:number =this.registerForm.controls.phone.value;


    const id :number = this.users.length + 1;

    const newUser:User = {
      id:id,
      name: name,
      login:login,
      password:password,
      phone:phone
    }

    let find =this.users.find((item)=> item.login !== login)

if(find){
      if(password === passConf){
         this.users.push(newUser)
          console.log(this.users);
           this.router.navigateByUrl("/home")
       }else{
        this.secondPassword = true
      }
     
}else{
  this.registeredUser = true
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
     this.registerForm = this.fb.group({
      first_name: new FormControl(
        '', 
        [Validators.required]
        ),
      phone: new FormControl(
        '',
         [Validators.required,
           Validators.pattern('^[0-9]*$')],    
      ),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl(
        '',
         [
           Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ],
         ),
         passConf:new FormControl()
     })
    this.getAllUsers()
  }
  

}
