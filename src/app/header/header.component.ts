import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'models/menuItem';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[];
  showNav: boolean;
  
  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this.menuItems = new Array<MenuItem>();
    this.menuItems.push(new MenuItem('StarWars', 'star-circle', '/starwars'));
    this.menuItems.push(new MenuItem('Pokemon', 'pokeball', '/pokemon'));
    this.showNav = localStorage.getItem('isLoggedIn') !== null;

    this._loginService.isLoggedIn.subscribe(success => {
      this.showNav = success;
    });
  }
}
