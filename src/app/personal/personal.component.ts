import {Component, OnInit} from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  latitude = 53.20589;
  longitude = 6.57904;

  map: any;

  constructor() {
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
