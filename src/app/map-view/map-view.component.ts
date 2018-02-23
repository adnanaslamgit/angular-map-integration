import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';


@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
constructor() { }

  ngOnInit() {
  }
}

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'YOUR_API_KEY_GOOGLE_MAPS',
});
