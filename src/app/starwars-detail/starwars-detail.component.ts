import { Component, OnInit, Input } from '@angular/core';
import { StarWarsPerson } from 'models/starwarsPerson';

@Component({
  selector: 'app-starwars-detail',
  templateUrl: './starwars-detail.component.html',
  styleUrls: ['./starwars-detail.component.css']
})
export class StarwarsDetailComponent implements OnInit {

  @Input()person: StarWarsPerson;
  constructor() { }

  ngOnInit() {
  }

}
