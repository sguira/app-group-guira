import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { AuthService } from 'src/app/service2/auth.service';
import { MatDialogService } from 'src/app/service2/mat-dialog.service';
import { ProduitService } from 'src/app/service2/produit.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  public form:FormGroup=undefined;
  public form2: FormGroup=undefined;
  public form3:FormGroup=undefined;
  public inputPicture=null;
  products:any;
  category:any;
  currentCategorie:any;

  newProduit:any={
    "id":'ok',
    "name":null,
    "description":null,
    "price":null,
    "available":null,
    "test":"show",
    "categorie":null
  }
  singleCategorie:any;
  newCategory:any={
    id:null,
    name:'',
    description:'',
    photoName:null
  }
  selectedFile: any;
  currentProduct:any;
  progress: number;
  currentFileUpload: any;
  timesamp: number;
  alertDanger:any= {
    visible:false,
    title:'',
    msg:'',
    role:0
  };

  constructor(public service:ProduitService,
    public build:FormBuilder,
    public confirm:MatDialogService,
    public authService:AuthService
    ) { }

  ngOnInit(): void {
    this.getCategorie();
    this.getProduit();
    this.initFormGroup();
    let i:number=2
    while(i<6){
      console.log(i);
      const id=document.getElementById('parent'+i);
      id.style.display='none'
      i++;
    }

  }

  initFormGroup(){
    this.form = this.build.group({
      id: [this.singleCategorie?.id, Validators.required],
      name: ['', Validators.required],
      description: ['']
    });
    this.form2=this.build.group({
      name:[''],
      description:[''],
      price:null,
      available:[false,Validators.required],
      categorie:undefined,
      photoName:undefined
    });
    this.form3=this.build.group({
      id:[this.newProduit?.id,Validators.required],
      name:['solo',Validators.required],
      description:[this.newProduit.description,Validators.required],
      price: [this.newProduit.price, Validators.required],
      available: [this.newProduit.available, Validators.required],
      categorie: [this.newProduit.categorie],
    })

  }

  /*former le corps de l'aterte*/

  modalAlert(title:string,message:string,visible:boolean,role:number,time:number){
    this.alertDanger={
      title:title,
      message:message,
      visible:visible,
      role:role
    };
    setTimeout(()=>{
      this.alertDanger.visible=false;
    },time*1000)
  }

  /**changer la photo */
  public openModifiePicture(){
    if(this.inputPicture){
      this.inputPicture = false;
    }
    else{
      this.inputPicture = true;
    }
  }

  //retourne la liste des produits
  getProduit(){
    this.service.getRessourceBackend('products').subscribe((data) => {
      this.products = data
    })
  }

  //retourne la liste des categories
  getCategorie(){
    this.service.getRessourceBackend('categories').subscribe(data => {
      this.category = data;
    })
  }

  //ouverture des modals
  ajouter(i:number,category:any){
    let c:number=1;
    while(c<6){
        if (c == i) {
          const id = document.getElementById('parent' + i);
          id.style.display = 'block';
        }
        else {
          const id = document.getElementById('parent' + c);
          id.style.display = 'none';
        }
        console.log(c);
        c++;
    }
    if(i==3){
      this.singleCategorie=category;
    }
    else if(i==5){
      this.newProduit=category;
      this.newProduit.categorie=null;
     }

  }

  close(i:number){
    const parent=document.getElementById('parent'+i);
    parent.style.display='none';
  }

  //processus ajout categorie
  public ajouterCategorie():void{
    if ((this.newCategory.name != '') && (this.newCategory.description != '')) {
      console.log(this.newCategory);
      this.service.ajouterCategorie(this.newCategory).subscribe(() => {
        this.getCategorie();
      })

    }
    this.newCategory = {
      id: null,
      name: '',
      description: '',
      photoName: null
    }
  }

  //fonction pour ajouter une categorie
  addCategorie(){
    this.confirm.openConfirmDialog('Voulez vous ajouter une nouvelle catégorie ?').afterClosed().subscribe(res=>{
      if(res){
        this.ajouterCategorie()
        this.modalAlert('Opération Reussie','Vous venez d\'ajouter une nouvelle categorie !!!',true,2,4);

      }
      else{
        return null;
      }
    })
  }

  //processus de la fonction permettant la suppression d'une categorie

  effacerCategorie(id: number):void{
    console.log('vous avez effacez l\'element categorie' + id);
    this.service.deleteCategorie(id).subscribe(() => {
      this.getCategorie();
      this.modalAlert('Opération Reussie', 'Vous venez de d\'éffacer une categorie !', true, 2, 4);
    },
    (error:HttpErrorResponse)=>{
      this.alertDanger={
        visible:true,
        title:'Echec de l\'opération',
        msg:'Impossible d\'éffacer une categorie contenant des categorie',
        role:1
      },
      setTimeout(()=>{
        this.alertDanger.visible=false;
      },5000)
    });
  }

  deleteCategorie(id:number){
    this.confirm.openConfirmDialog('Voulez vous effacer cette catégorie ?').afterClosed().subscribe(res=>{
      if(res){
        this.effacerCategorie(id);
        this.modalAlert('Opération Reussie', 'Vous venez de supprimer une categorie', true, 2, 4);
      }
    })
  }


  //processus de modification d'une categorie
  modiCategorie():void{
    if ((this.form.value['name'] != '') && (this.form.value['description'] != '')) {
      console.log(this.singleCategorie.id);
      this.singleCategorie.name = this.form.value['name'];
      this.singleCategorie.description = this.form.value['description']
      this.service.updateCategorie(this.singleCategorie).subscribe(data => {
        this.getCategorie();
      })
    }
  }
  updateCategorie(){
    this.confirm.openConfirmDialog('Voulez vous modifier cette categorie ?').afterClosed().subscribe(res=>{
      if(res){
        this.modiCategorie();
        this.modalAlert('Opération Reussie', 'Vous venez de mofier une categorie', true, 2, 4);
      }
    })
  }

  //processus d'ajout de produit

  ajouterProduit():void{
    console.log(this.form2.value);
    this.service.addProduct(this.form2.value).subscribe((data) => {
      this.getCategorie();
      this.getProduit();
    }, (error) => {
      console.log(error)
    })
  }

  addNewProduit(){
    this.confirm.openConfirmDialog('Vous allez ajouter un nouveau produit').afterClosed().subscribe(res=>{
      if(res){
        this.ajouterProduit();
        this.modalAlert('Opération Reussie', 'Vous venez de d\'ajouter un nouveau produit', true, 2, 4);
      }
    })
  }


  //processus modification de categorie
  modifProduit():void{

    let updateProduct = {
      id: null,
      name: null,
      description: null,
      photoName: null,
      price: null,
      categorie: null,
      available: null
    }

    updateProduct.id = this.newProduit.id;
    updateProduct.name = this.newProduit.name;
    updateProduct.description = this.newProduit.description;
    updateProduct.photoName = null;
    updateProduct.price = this.newProduit.price;
    updateProduct.categorie = this.newProduit.categorie;
    updateProduct.available = this.newProduit.available;
    console.log(updateProduct)
    this.service.updateProduct(updateProduct).subscribe(() => {
      this.getProduit();
    },
      (error) => {
        console.log('erreur de chargement' + error);
      }

    )
  }

  public updateProduct(){
    this.confirm.openConfirmDialog('Voulez vous modifier ce produit ?').afterClosed().subscribe(res=>{
      if(res){
        this.modifProduit();
        this.modalAlert('Opération Reussie', 'Vous venez de d\'ajouter un produit', true, 2, 4);
      }
    })
  }

  getProductByCategorie(cat){
    this.currentCategorie=cat.name;
    return this.service.getRessourceBackend('categories/'+cat.id+'/products').subscribe((data)=>{
      this.products=data;
    })
  }

  /*suppression d'un produit*/

  supprimerProduit(id:number):any{
    this.service.deleteProduct(id).subscribe(data=>{
      this.getProduit();
      return 1;
    },(error)=>{
      this.modalAlert('Echec de l\'opération !','Nous avons rencontrer une erruer',true,1,4);
      console.log(error)
      return 0;
    })
  }

  deleteProduct(id:number){
    this.confirm.openConfirmDialog('Voulez vous effacer ce produit ?').afterClosed().subscribe(res=>{
      if(res){
        this.supprimerProduit(id);
          this.modalAlert('opération réussie !', 'vous avez éffacer un produit', true, 2, 5);
      }

    })
  }

  /*pour le chargement de la photo*/

  onChange(event:any){
    this.selectedFile=event.target.files;
    console.log(this.selectedFile[0]);
  }

  // envoit de la photo

  openUploadPhoto(c){
    this.currentProduct=c;
  }

  //le changement de photo
  changePhoto():void{
    this.progress = 0;
    if (this.selectedFile) {
      this.currentFileUpload = this.selectedFile.item(0);
      this.service.uploadPhotoProduit(this.currentFileUpload, this.currentProduct.id).subscribe((event) => {
        console.log(this.currentProduct)
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded);
          console.log(this.progress);
        }
        else if (event instanceof HttpResponse) {
          alert("donner charger");
          this.timesamp = Date.now();

        }
      },
        (error: HttpErrorResponse) => {
          alert("Problème de chargement" + error);
        });
    }
  }

  onUploadPhoto(){
    this.confirm.openConfirmDialog('Modifier la photo').afterClosed().subscribe(res=>{
      if(res){
        this.changePhoto();
      }
    })
  }


  /**** */

  /*deconnecter*/
  logOut(){
    this.confirm.openConfirmDialog('Vous allez être déconnecté !').afterClosed().subscribe(res=>{
      if(res){
        this.authService.logOut();
      }
    })
  }


}
