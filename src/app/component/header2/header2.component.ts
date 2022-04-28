import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/jquery/menu.service';
import { ProduitService } from 'src/app/service2/produit.service';


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  public produitRechercher:any;
  public text;
  public currentRoute:string="accueil";
  public name:string
  constructor(public service2:ProduitService,
              public router:Router,
              public menuService:MenuService
    ) { }
  ngOnInit(): void {
  }
  public onSearch() {
    this.service2.getProductByUrl('http://localhost:8080/products/search/productByKeyword?mc=' + this.text).subscribe(data => {
      this.produitRechercher = data;
    })
  }
  onNavigateDetails(p) {
    let url = btoa(p._links.product.href)
    this.router.navigateByUrl('/details/' + url);
  }
  onClick(p:string){
    this.currentRoute=p;
  }

  toggleUp(){
    this.menuService
  }

  soul1(){
    document.getElementById("soul1").style.background="blue";
    document.getElementById("soul2").style.background = "black";
    document.getElementById("soul3").style.background = "black";
    document.getElementById("soul4").style.background = "black";
  }

  soul2() {
    document.getElementById("soul1").style.background = "black";
    document.getElementById("soul2").style.background = "blue";
    document.getElementById("soul3").style.background = "black";
    document.getElementById("soul4").style.background = "black";
  }

  soul3() {
    document.getElementById("soul1").style.background = "black";
    document.getElementById("soul2").style.background = "black";
    document.getElementById("soul3").style.background = "blue";
    document.getElementById("soul4").style.background = "black";
  }

  soul4() {
    document.getElementById("soul1").style.background = "black";
    document.getElementById("soul2").style.background = "black";
    document.getElementById("soul3").style.background = "black";
    document.getElementById("soul4").style.background = "blue";
  }



}




