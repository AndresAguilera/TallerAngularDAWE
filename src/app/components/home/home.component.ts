import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  color: string;
  opciones = [{ name: 'none' , color: ''},
    { name: 'Primary' , color: 'primary'},
    { name: 'Accent' , color: 'accent'},
    { name: 'Warn' , color: 'warn'}];
  ngOnInit() {
  }

}

