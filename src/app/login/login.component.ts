import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }

  login() {
    if(this.username === 'patrick.jahr' 
    && this.password === 'test123'){
      alert('tut');  
    } else {
      alert('nene');
    }
  }

}
