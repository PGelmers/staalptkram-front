import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ItemForSale } from '../../model/item-for-sale';
import { ItemForSaleService } from '../../services/item-for-sale.service';

@Component({
  selector: 'app-item-for-sale',
  templateUrl: './item-for-sale.component.html',
  styleUrls: ['./item-for-sale.component.css']
})
export class ItemForSaleComponent implements OnInit {
  itemForSale: ItemForSale;

  constructor(
    private itemForSaleService: ItemForSaleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItemForSale();
  }

  getItemForSale(): void {
    // TODO: maken zodra de routing module werkt.
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.itemForSaleService.updateItemForSale(this.itemForSale)
      .subscribe(() => this.goBack());
  }
}
