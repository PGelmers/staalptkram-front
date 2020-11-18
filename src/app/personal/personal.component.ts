import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';

declare var ol: any;

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  // TODO: use global user variable.
  // latitude = this.user.latitude;
  // longitude = this.user.longitude;
  latitude = 53.20589;
  longitude = 6.57904;

  map: any;

  constructor(
    // private user: User
  ) {
  }

  ngOnInit(): void {
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

    // const container = document.getElementById('popup');
    // const content = document.getElementById('popup-content');
    // const closer = document.getElementById('popup-closer');
    //
    // const overlay = new ol.Overlay({
    //   element: container,
    //   autoPan: true,
    //   autoPanAnimation: {
    //     duration: 250
    //   }
    // });
    // this.map.addOverlay(overlay);
    //
    // content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
    // overlay.setPosition(ol.proj.fromLonLat([this.longitude, this.latitude]));
  }
}
