import { Component, OnInit } from '@angular/core';
import { MenuService } from './jquery/menu.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private jqueryMenu:MenuService){

  }

  ngOnInit(): void {
    this.jqueryMenu.ngOnInit()

  }

}
