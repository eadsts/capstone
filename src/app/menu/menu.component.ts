import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../core/about/about.component';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    // parent
    menus: Menu[] = [
     new Menu("Home","/home"),
     new Menu("About","/about"),
     new Menu("Users", "/users/list"),
     new Menu("Vendors", "/vendors/list"),
     new Menu("Products", "/products/list"),
     new Menu("Requests", "/requests/list")
    ];
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }

 