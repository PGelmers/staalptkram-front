import {Component, Input, OnInit} from '@angular/core';
import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';
import {ItemsForSaleListComponent} from '../items-for-sale-list/items-for-sale-list.component';
import {User} from '../../model/user';
import {GlobalConstants} from '../../common/global-constants';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productIsUploaded = false;
  product = new ItemForSale();
  user = GlobalConstants.user;

  constructor(private productService: ItemForSaleService, private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  public save() {
    this.product.user = this.user;
    this.productService.save(this.product).subscribe((prd: ItemForSale) => this.product = prd);
    this.productIsUploaded = true;
  }

  ngOnInit(): void {
    this.product.id = Number(this.route.snapshot.paramMap.get('productid'));
    if (this.product.id !== 0) {
      this.productService.getItemForSale(this.product.id).subscribe(
        prd => {
          this.product = prd;
        }
      );
      this.productIsUploaded = true;
    } else {
      // DO NOTHING AT THE MOMENT. IS AN ID OF '0' OK? SEEMS SO!
    }

  }

}
