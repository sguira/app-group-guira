import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Contact } from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  private url: string ="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public getRessourceBackend(url:string){
    return this.http.get(this.url+url);
  }

  getProductByUrl(url:string):Observable<Product>{
    return this.http.get<Product>(url);
  }

  sendMail(email:Contact){
    return this.http.post(this.url+'/mail',email);
  }

  ajouterCategorie(cat){
    return this.http.post(this.url+'addCategory',cat);
  }

  deleteCategorie(id:number){
    return this.http.delete(this.url +'deleteCategorie/'+id);
  }

  updateCategorie(cat){
    return this.http.put(this.url +'updateCategory',cat);
  }

  addProduct(product:any){
    return this.http.post(`${this.url +'addProduct'}`,product);
  }

  uploadPhotoProduit(file:any,id:number){
    let formData=new FormData();
    formData.append('file',file);
    const req = new HttpRequest('POST', this.url +'uploadPhoto/'+id,formData,{
      reportProgress:true,
      responseType:'text'
    });
    return this.http.request(req);

  }

  updateProduct(product:any){
    return this.http.put(this.url+'updateProduct',product);
  }

  //effacer un produit
  public deleteProduct(id:number){
    return this.http.delete(this.url+'deleteProduct/'+id);
  }

}
