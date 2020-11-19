import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';
import {User} from '../../model/user';
import {GlobalConstants} from '../../common/global-constants';

declare var ol: any;

@Component({
  selector: 'app-item-for-sale',
  templateUrl: './item-for-sale.component.html',
  styleUrls: ['./item-for-sale.component.css']
})
export class ItemForSaleComponent implements OnInit {
  itemForSale: ItemForSale;

  user = new User();

  // TODO: aanzetten zodra login component geïntegreerd is.
  // latitude: number;
  // longitude: number;

  // TODO: verwijderen zodra login component geïntegreerd is.
  latitude = 53.20589;
  longitude = 6.57904;

  map: any;

  constructor(
    private route: ActivatedRoute,
    private itemForSaleService: ItemForSaleService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getSingleItemForSale(Number(this.route.snapshot.paramMap.get('productid')));
    this.initializeMap();
  }

  getSingleItemForSale(id: number): void {
    this.itemForSaleService.getItemForSale(id).subscribe(
      itemForSale => this.itemForSale = itemForSale);
  }

  goBack(): void {
    this.location.back();
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
