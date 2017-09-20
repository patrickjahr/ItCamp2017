import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../../models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input()pokemon: Pokemon;
  constructor() { }

  ngOnInit() {
  }

}
