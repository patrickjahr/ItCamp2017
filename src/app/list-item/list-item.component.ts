import { Component, OnInit, Input } from '@angular/core';
import { StarWarsPerson } from 'models/starwarsPerson';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()person: StarWarsPerson;

  constructor() { }

  ngOnInit() {
  }

}
