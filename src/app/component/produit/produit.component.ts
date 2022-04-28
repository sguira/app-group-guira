import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { ProduitService } from 'src/app/service/produit.service';
import { ProduitService } from 'src/app/service2/produit.service';
import * as $ from 'jquery'

@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


    produit: any = [];
    id: number;
    index_: number;


    constructor(private produitService: ProduitService,
        private router: ActivatedRoute,
        private route: Router,
        private serviceCategorie:ProduitService
    ) {

    }

    ngOnInit(): void {
        /*this.id = this.router.snapshot.params['id'];
        this.produit = this.produitService.produits[this.id]
        console.log(this.produit.elements[0].photo[0].url);*/
    }

    getProduit(){
      this.serviceCategorie.getRessourceBackend('categories/')
    }






}
