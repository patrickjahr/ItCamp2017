import { Component, OnInit } from '@angular/core';
import { StarWarsPerson } from 'models/starwarsPerson';
import { StarwarsService } from 'services/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  currentPerson: StarWarsPerson;
  liste: StarWarsPerson[];
  searchText: string;
  showList: boolean;

  constructor(private _starWarsService: StarwarsService) {
  }

  ngOnInit(): void {
    this.searchText = '';
    this.showList = window.innerWidth > 960 || this.currentPerson === undefined;
    this._starWarsService.GetPeople().subscribe(list => {
      this.liste = list;
    })
  }

  openPerson(person: StarWarsPerson) {
    this.showList = window.innerWidth > 960;
    this.currentPerson = person;
  }
  closePerson() {
    this.currentPerson = undefined;
    this.showList = true;
  }

  onResize(event) {
    this.showList = window.innerWidth > 960 || this.currentPerson === undefined;
  }
}
