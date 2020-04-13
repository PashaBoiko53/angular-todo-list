import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  public isMobileNavActive = false;
  public isAuthorised = false;

  constructor() { }

  ngOnInit() {
    this.isAuthorised = JSON.parse(localStorage.getItem("isAuthorised"));
  }

}
