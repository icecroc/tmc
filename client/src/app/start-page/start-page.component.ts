import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  name$: string

  constructor() { }

  ngOnInit() {
    this.name$ = localStorage.getItem('email')
  }

}
