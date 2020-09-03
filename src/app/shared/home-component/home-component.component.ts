import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor( public router:Router) { 

  }

  ngOnInit(): void {
  }

  public logout(){
    localStorage.setItem("reg","s")
    localStorage.setItem("log","s")
    localStorage.removeItem('home');
    this.router.navigateByUrl("/register")
  }

  

}
