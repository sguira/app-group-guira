import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery'
import { Product } from 'src/app/model/product';
import { ProduitService } from 'src/app/service2/produit.service';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


    product:Product;

    constructor(public service2:ProduitService,
                private routes:ActivatedRoute
      ) {

    }

    ngOnInit(): void {
      let url=atob(this.routes.snapshot.params.url);
      this.service2.getProductByUrl(url).subscribe((data:Product)=>{
        this.product=data;
        console.log(this.product)
      })
    }






}
