import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required], this.validateEmail)
  });

  constructor(public _LoginService: LoginService, public _router: Router) { }

  ngOnInit() {
  }
  //
  // ──────────────────────────────────────────────────────────── VALIDATE EMAIL ─────
  validateEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (/^([a-zA-Z0-9_-]){6,15}$/.test(control.value)) {
        resolve(null);
      }
      else {
        resolve({ 'invalidPassword': true });
      }
    });
    return promise;
  }

  get f() {
    return this.loginForm.controls;
  }

  //
  // ───────────────────────────────────────────────────────────────── ONSUBMIT ─────
  onSubmit() {
    let user = this._LoginService.validateLogin(this.f.email.value, this.f.password.value);
    if (user) {
      localStorage.setItem("loginData", user.id.toString())
      alert("Success");
      this._router.navigate(["home"]);
    } else {
      alert("Invalid Credential");
    }
  }

}
