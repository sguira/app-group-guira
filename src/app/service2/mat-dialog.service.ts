import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ConfirmComponent } from '../component/confirm/confirm.component';
@Injectable({
  providedIn: 'root'
})
export class MatDialogService {

  constructor(public dialog:MatDialog) { }

  openConfirmDialog(txt:string){
   return this.dialog.open(ConfirmComponent,{
      width:'390px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      position:{top:'30vh'},
      data:{
        msg:txt
      }
    });
  }

}
