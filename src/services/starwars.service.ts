import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { StarWarsPerson } from '../models/starwarsPerson';

@Injectable()
export class StarwarsService {

  constructor(private _http: Http) { }

  public GetPeople(): Observable<StarWarsPerson[]> {
    return Observable.create((observer) =>{
      this._http.get('https://swapi.co/api/people')
        .map(data => data.json())
        .subscribe(result => {
          const personList = result.results as StarWarsPerson[];
          if(personList) {
            observer.next(personList);
          }
        });
    });
  }
}
