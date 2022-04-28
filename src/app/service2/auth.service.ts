import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Admin } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth:boolean=false;
  public admin:any;
  public url = "http://localhost:8080/";
  constructor(public http:HttpClient,
        public router:Router
    ){
    this.http.get(this.url+'admins').subscribe((s)=>{
      this.admin=s;
    })
  }

  verification(identifiant:string,password:string){
    if(localStorage.getItem('token_admin')){
      this.auth=true;
      this.router.navigateByUrl('/admin');
    }
    else{
      this.admin._embedded.admins.forEach(s => {
        if(s.identifiant==identifiant && s.password==password){
          localStorage.setItem('token_admin', btoa(JSON.stringify({ email: identifiant, password: password })));
          this.auth=true;
          this.router.navigateByUrl('/admin');
        }
      });
    }
  }

  getTokenItem(){
    if(localStorage.getItem('token_admin')){
      this.auth=true;
      console.log(JSON.parse(atob(localStorage.getItem('token_admin'))));
      this.router.navigateByUrl('/admin')
    }
  }

  logOut(){
    localStorage.removeItem('token_admin');
    this.router.navigateByUrl('/auth');
  }

  recherche(email:string,password:string){

    let val=false;
    this.admin._embedded.admins.forEach(s => {

      if(s.identifiant==email && s.password==password){
        val=true;
      }
    });
    return val;
  }

  addUser(admin:any){
    return this.http.post(this.url +'addUser',admin);
  }


}
