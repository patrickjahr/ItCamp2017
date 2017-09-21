import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  isLoggedIn: EventEmitter<boolean>;

  constructor(private _router: Router) {
    this.isLoggedIn = new EventEmitter();
   }

  login(username: string, password: string) {
    if(username === 'patrick.jahr' && password === 'test123'){
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedIn.emit(true);
      this._router.navigate(['starwars']); 
    } else {
      this.isLoggedIn.emit(false);
      alert('nene');
    }
  }

  logout(){
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn.emit(false);
  }
}
