import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  public typeOfPassword = "password";

  ngOnInit() {
  }
  authorisation(password, login) {
    if (password === "asdfasdf" && login === "pashaboiko") {
      localStorage.setItem("isAuthorised", "true");
      this.router.navigate(['../start-page']);
    }
    else {
      alert("Error");
    }
  }
  showPassword() {
    this.typeOfPassword = "text";
  }
  hidePassword() {
    this.typeOfPassword = "password";
  }
}
