import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Map Integration in ng-2';
  lat: number = 51.678418;
  lng: number = 7.809007;
	  constructor(){}

  ngOnInit() {
  }
}