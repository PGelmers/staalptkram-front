import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {GlobalConstants} from '../../common/global-constants';

declare var ol: any;

@Component({
  selector: 'app-openstreetmap',
  templateUrl: './openstreetmap.component.html',
  styleUrls: ['./openstreetmap.component.css']
})
export class OpenstreetmapComponent implements OnInit {
  user = new User();

  latitude: number;
  longitude: number;

  map: any;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeMap();
  }

  setCoordinates(latitude: number, longitude: number): void {
    // TODO: deze methode is om te testen. Kan later weg omdat coördinaten uit de user komen.
    // Zie onder.
    this.latitude = latitude;
    this.longitude = longitude;
  }

  initializeMap(): void {
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
