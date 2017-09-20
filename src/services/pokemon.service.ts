import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Pokemon} from '../models/pokemon';

@Injectable()
export class PokemonService {

  constructor(private _http: Http) { }

  public GetPokemon(): Observable<Pokemon[]> {
    return Observable.create((observer) => {
      this._http.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .map(data => data.json())
        .subscribe(result => {
          const personList = result.results as Pokemon[];
          if (personList) {
            for (let i = 0; i < personList.length; i++){
              personList[i].url = personList[i].url.substring(0, personList[i].url.length - 1);
              const currentId = personList[i].url.substring(personList[i].url.lastIndexOf('/'), personList[i].url.length);
              personList[i].url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + currentId + '.png';
            }
            observer.next(personList);
          }
        });
    });
  }
}
