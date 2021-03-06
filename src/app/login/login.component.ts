import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this._loginService.login(this.username, this.password);
  }

}
