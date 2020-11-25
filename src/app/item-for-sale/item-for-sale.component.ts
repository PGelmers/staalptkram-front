import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';
import {OpenstreetmapComponent} from '../openstreetmap/openstreetmap.component';

@Component({
  selector: 'app-item-for-sale',
  templateUrl: './item-for-sale.component.html',
  styleUrls: ['./item-for-sale.component.css']
})
export class ItemForSaleComponent implements OnInit {
  itemForSale = new ItemForSale();
  openStreetMap = new OpenstreetmapComponent();

  constructor(
    private route: ActivatedRoute,
    private itemForSaleService: ItemForSaleService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getSingleItemForSale(Number(this.route.snapshot.paramMap.get('productid')));
  }

  getSingleItemForSale(id: number): void {
    this.itemForSaleService.getItemForSale(id).subscribe(
      itemForSale => {
        this.itemForSale = itemForSale;
        this.openStreetMap.setCoordinates(this.itemForSale.user.latitude, this.itemForSale.user.longitude);
        this.openStreetMap.initializeMap();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
