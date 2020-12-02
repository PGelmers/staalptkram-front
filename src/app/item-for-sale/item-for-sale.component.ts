import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GlobalConstants} from '../../common/global-constants';

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
  itemForSale = new ItemForSale();
  openStreetMap = new OpenstreetmapComponent();
  user = GlobalConstants.user;
  user_id = 0;

  constructor(
    public messageService: MessageServiceService,
    private route: ActivatedRoute,
    private itemForSaleService: ItemForSaleService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getSingleItemForSale(Number(this.route.snapshot.paramMap.get('productid')));
    if (this.user !== undefined){
      this.user_id = this.user.id;
    }
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
