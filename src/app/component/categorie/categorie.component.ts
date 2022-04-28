import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import * as EventEmitter from 'events';
import { Product } from 'src/app/model/product';
import { ProduitService } from 'src/app/service2/produit.service';


@Component({
    selector: 'app-categorie',
    templateUrl: './categorie.component.html',
    styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

    produits: any = undefined;
    id: number;
    public currentCategorie;
    public categories:any;
    public affiche:string=" Machine"

    constructor(private produitService: ProduitService,
        private routes: Router,
        public service2:ProduitService
        ) {}

    ngOnInit(): void {
        /*this.produits = this.produitService.produits
        console.log(this.produits)*/
      this.service2.getRessourceBackend('categories').subscribe(data => {
        this.categories = data;

      }, error => {
        console.log(error)
      })
      this.service2.getRessourceBackend('categories/' + 1 + '/products').subscribe((data) => {
        this.produits = data;
        this.currentCategorie = this.categories[0];
      })

    }

  public onNavigateProduit(c){
    this.service2.getRessourceBackend('categories/'+c.id+'/products').subscribe(data=>{
      this.affiche=(c.id==1?" Machine":(c.id==2?" Brique":(c.id==3?"  Pavé":" Divers")));
      this.produits=data;
      this.currentCategorie=c;

    })
  }


       /* onClick(i) {
        this.routes.navigateByUrl('categorie/' + i)
    }*/

  onNavigateDetails(c:Product){
      let url=btoa(c._links.product.href);
      this.routes.navigateByUrl('details/'+url);
  }

}
