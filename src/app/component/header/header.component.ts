import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, OperatorFunction, } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Produit } from 'src/app/model/produit';
import { LoaderService } from 'src/app/service2/loader.service';
import { ProduitService } from 'src/app/service2/produit.service';

const states = ['brique', 'sable', 'ciment', 'chantier', 'maison', 'siège',
    'gravier', 'hourdis', 'dalle', 'pleine'
];

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})





export class HeaderComponent implements OnInit {

    public model: any;

    public produitRechercher:any;

    public text:string;
    public currentLien:string='home';

    constructor(public service2:ProduitService,
      private router:Router,
      public isLoader:LoaderService
      ) {}

    ngOnInit(): void {

    }

  public onSearch(){
    if(this.text.length>=2){
      this.service2.getProductByUrl('http://localhost:8080/products/search/productByKeyword?mc=' + this.text).subscribe(data => {
        this.produitRechercher = data;
      })
    }

  }

  onNavigateDetails(p){
    alert("ok")
    let url = btoa(p._links.product.href)
    this.router.navigateByUrl('/details/'+url);
  }
  openModal(){

    const id = document.getElementById('modal');
    id.style.display = 'block';
    console.log(this.text);
  }

  closeModal(){
    const id = document.getElementById('modal');
    id.style.display = 'none';
    this.text = "";
  }

  onClickBtn(){
    const btn=document.getElementById('btn');
    const div = document.getElementById('navbar');

  }

  onActive(numero:string){
    this.currentLien=numero;
  }

}
