import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {};
  constructor(public _LoginService: LoginService, public _router: Router) { }

  ngOnInit() {
    let user = localStorage.getItem("loginData");
    if (user) {
      let userData = this._LoginService.getUserById(+user);
      if (userData) {
        this.user = userData;
      } else {
        alert("User not found");
        this._router.navigate(["login"]);
      }
    } else {
      this._router.navigate(["login"]);
    }
  }

}
