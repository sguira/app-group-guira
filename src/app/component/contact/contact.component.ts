import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { MatDialogService } from 'src/app/service2/mat-dialog.service';
import { ProduitService } from 'src/app/service2/produit.service';





@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {



    contact: Contact;
    alert:number=0;
    progressBar:boolean=false;
    userGroup: FormGroup;
    error:number=0;

        constructor(private builder: FormBuilder,
          private service2:ProduitService,
          public dialogService:MatDialogService
          ) {}

        ngOnInit(): void {
        this.initForm();

    }

        initForm() {
          //'^([a-zA-Z]{2,25} *)+'
        this.userGroup = this.builder.group({
            name: '',
            email: ['', [Validators.required, Validators.email]],
            objet: '',
            message: ['']
        });
    }

    processusDenvoi(){
      this.progressBar = true;
      this.contact = new Contact(this.userGroup.value.name, this.userGroup.value.email, this.userGroup.value.objet, this.userGroup.value.message);
      this.service2.sendMail(this.contact).subscribe(data => {
        this.alert = 1;
        this.progressBar = false;
        setTimeout(() => {
          this.alert = 1;

        }, 5000)
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.alert = 2;
        setTimeout(() => {
          this.alert = 0
          this.progressBar = false;
        }, 3000)
      })
    }

    rechercheErreur(){
      let p = new RegExp('^([a-zA-Z]{3,25} *)+')
      if (!p.test(this.userGroup.value['name'])){
        this.error=1;
        return false
      }
      if(!this.userGroup.valid){
        this.error=2;
        return false;
      }
      if(this.userGroup.value['message']==''){
        this.error=3;
        return false
      }

      return true;
    }

    onSubmit() {

      console.log(this.userGroup)
        if(this.rechercheErreur()==true){
          this.dialogService.openConfirmDialog('vous voulez envoyer le mail').afterClosed().subscribe(res => {

            if (res) {
              this.processusDenvoi();
            }
            else {

            }
          })
        }
        else{
          setTimeout(()=>{
            this.error=0;
          },3000)
        }
        return null;

    }

    monAlert(){
      const componant=document.createElement('div');
      componant.className='alert-div';
      document.getElementById('alert').appendChild(componant);
    }

}
