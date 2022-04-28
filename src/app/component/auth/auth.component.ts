import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/auth';
import { AuthService } from 'src/app/service2/auth.service';
import { MatDialogService } from 'src/app/service2/mat-dialog.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public show:number=1;
  public form:FormGroup;
  public form2:FormGroup;
  public admin:Admin;
  public press:boolean=false;
  public type: string="password";
  alertComponent:any={
    text:'',
    visible:false,
    delay:null,
    role:1
  }
  constructor(private authService:AuthService,
    private build:FormBuilder,
    public confirm:MatDialogService,
    public router:Router
    ) { }

  ngOnInit(): void {
    this.authService.getTokenItem();
    this.initForm();
  }

  initForm(){
    this.form=this.build.group({
      identifiant:['',Validators.required],
      password:['',Validators.required]
    })

    this.form2=this.build.group({
      identifiant1:['',Validators.required],
      identifiant2: ['',Validators.required],
      password1: ['',Validators.required],
      password2: ['',Validators.required]
    })
  }

  onConnect(){
    this.admin = new Admin(null, this.form.value['identifiant'], this.form.value['password']);
    this.authService.verification(this.form.value['identifiant'], this.form.value['password']);
    if (this.authService.auth==false){
      this.alertComponent = {
        text: 'Vos données sont incorrect!',
        visible: true,
        delay: 4,
        role: 2
      }
      setTimeout((

      ) => { this.alertComponent.visible = false; }, 5000);
    }
  }
  toggleShow(i:number){
    this.show=i;
  }

  eye(){
    if(this.press==false){
      this.type="text";
      this.press=true;
      document.forms.namedItem('password').focus();
    }
    else{
      this.type="password";
      this.press=false;
      document.forms.namedItem('password').focus();
    }

  }


  //addUser
  addUser(){
    this.confirm.openConfirmDialog('Ajouter un nouveau administrateur').afterClosed().subscribe(res=>{
      if(res){
        if (this.authService.recherche(this.form2.value['identifiant1'], this.form2.value['password1'])) {
          const user: any = {id:null, identifiant: this.form2.value['identifiant2'], password: this.form2.value['password2'] }
          this.authService.addUser(user).subscribe(data => {
            this.alertComponent={
              text: 'vous venez d\'ajouter un nouvel administrateur !',
              visible: true,
              delay: 4,
              role: 1
            }
            setTimeout((

            ) => { this.alertComponent.visible = false;},5000);
          }, (error: HttpErrorResponse) => {
            console.log(error);
          })
        }
        else{
          this.alertComponent = {
            text: 'Vos coordonnées sont incorrecte!',
            visible: true,
            delay: 4,
            role: 2
          }
          setTimeout((

          ) => { this.alertComponent.visible = false; }, 5000);
        }
      }
    })
  }


  logIn(){
    this.show=1;
  }


}
