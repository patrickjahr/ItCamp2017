import { Component, OnInit } from '@angular/core';
import { StarWarsPerson } from 'models/starwarsPerson';
import { StarwarsService } from 'services/starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPerson: StarWarsPerson;
  liste: StarWarsPerson[];

  constructor(private _starWarsService: StarwarsService) {
  }
  
  ngOnInit(): void {
    this._starWarsService.GetPeople().subscribe(list => {
      this.liste = list;
    })
  }

  openPerson(person: StarWarsPerson) {
    this.currentPerson = person;
  }
}
