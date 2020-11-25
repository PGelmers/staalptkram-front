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

  latitude = 0;
  longitude = 0;

  map: any;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeMap();
  }

  setCoordinates(latitude: number, longitude: number): void {
    // console.log(latitude, longitude);
    this.latitude = latitude;
    this.longitude = longitude;
  }

  initializeMap(): void {
    this.user = GlobalConstants.user;

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 17,
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
  }
}
