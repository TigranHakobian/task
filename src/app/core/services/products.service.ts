import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public users:User[];
  constructor(public http: HttpClient) { 
    this.getJson().subscribe(
      res => {
        this.users = res.users;
      },
      err => {
        throw err;
      }
    );
  }

  public getJson():Observable<any>{
    return this.http.get("./assets/json/data.json")
  }
}
