import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';
import {OpenstreetmapComponent} from '../openstreetmap/openstreetmap.component';
import {MessageServiceService} from "../../services/message-service.service";

@Component({
  selector: 'app-item-for-sale',
  templateUrl: './item-for-sale.component.html',
  styleUrls: ['./item-for-sale.component.css']
})
export class ItemForSaleComponent implements OnInit {
  itemForSale: ItemForSale;
  openStreetMap = new OpenstreetmapComponent();

  constructor(
    public messageService: MessageServiceService,
    private route: ActivatedRoute,
    private itemForSaleService: ItemForSaleService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getSingleItemForSale(Number(this.route.snapshot.paramMap.get('productid')));
    this.openStreetMap.setCoordinates(53.20589, 6.57904);
    this.openStreetMap.initializeMap();
  }

  getSingleItemForSale(id: number): void {
    this.itemForSaleService.getItemForSale(id).subscribe(
      itemForSale => this.itemForSale = itemForSale);
  }

  goBack(): void {
    this.location.back();
  }
}
