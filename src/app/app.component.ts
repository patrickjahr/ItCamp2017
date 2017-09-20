import { Component, OnInit } from '@angular/core';
import { StarWarsPerson } from 'models/starwarsPerson';
import { StarwarsService } from 'services/starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _starWarsService: StarwarsService) {
  }
  
  ngOnInit(): void {
  }
}
