import { Component, OnInit } from '@angular/core';
declare let L;
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor() {

	}

	ngOnInit() {
		const map = L.map('map').setView([51.505, -0.09], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.Routing.control({
			waypoints: [
				L.latLng(57.74, 11.94),
				L.latLng(57.6792, 11.949)
			]
		}).addTo(map);
	}

}
