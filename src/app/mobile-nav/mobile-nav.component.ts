import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'models/menuItem';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {

  menuItems: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menuItems = new Array<MenuItem>();
    this.menuItems.push(new MenuItem('StarWars', 'star-circle', '/starwars'));
    this.menuItems.push(new MenuItem('Pokemon', 'pokeball', '/pokemon'));
  }

}
