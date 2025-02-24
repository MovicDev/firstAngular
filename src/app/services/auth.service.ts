import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username = 'movic';
  users= ["movic","mike","james","john"];
  changeUsername(name:string){
    this.username = name;
    console.log(this.username);
    
  }
  constructor(
    private _http:HttpClient
  ) {}
  url = "https://jsonplaceholder.typicode.com/users";
  fetchhUsers(){
   return this._http.get(this.url)
  }
  url_url = "https://api.github.com/users";
  fetchhUsers2(){
   return this._http.get(this.url_url)
  }
}
