import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';

@Component({
  selector: 'app-item-for-sale',
  templateUrl: './item-for-sale.component.html',
  styleUrls: ['./item-for-sale.component.css']
})
export class ItemForSaleComponent implements OnInit {
  itemForSale: ItemForSale;

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
      itemForSale => this.itemForSale = itemForSale);
  }

  goBack(): void {
    this.location.back();
  }
}
