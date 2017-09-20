import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  currentPokemon: Pokemon;
  liste: Pokemon[];
  searchText: string;
  showList: boolean;

  constructor(private _starWarsService: PokemonService) {
  }

  ngOnInit(): void {
    this.searchText = '';
    this.showList = window.innerWidth > 960 || this.currentPokemon === undefined;
    this._starWarsService.GetPokemon().subscribe(list => {
      this.liste = list;
    })
  }

  openPerson(p: Pokemon) {
    this.showList = window.innerWidth > 960;
    this.currentPokemon = p;
  }

  closePerson() {
    this.currentPokemon = undefined;
    this.showList = true;
  }

  onResize(event) {
    this.showList = window.innerWidth > 960 || this.currentPokemon === undefined;
  }
}
