import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../common/global-constants';
import {User} from '../../model/user';

declare var ol: any;

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  user = new User();

  // TODO: aanzetten zodra login component geïntegreerd is.
  // latitude: number;
  // longitude: number;

  // TODO: verwijderen zodra login component geïntegreerd is.
  latitude = 53.20589;
  longitude = 6.57904;

  map: any;

  constructor() {
  }

  ngOnInit(): void {
    this.user = GlobalConstants.user;
    // TODO: aanzetten zodra login component geïntegreerd is.
    // this.latitude = this.user.latitude;
    // this.longitude = this.user.longitude;

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 19,
        marker: ol.proj.fromLonLat([this.longitude, this.latitude])
      })
    });
    this.addMarker();
  }

  addMarker(): void {
    const layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([this.longitude, this.latitude]))
          })
        ]
      })
    });
    this.map.addLayer(layer);

    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');

    const overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    this.map.addOverlay(overlay);

    // TODO: checken of dit werkt na integratie login component.
    content.innerHTML = '<b>' + this.user.straatnaam + '</br>' + this.user.huisnummer + '<br>' + this.user.plaatsnaam + '</b>';
    overlay.setPosition(ol.proj.fromLonLat([this.longitude, this.latitude]));
  }
}
