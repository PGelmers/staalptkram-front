import {Component, Input, OnInit} from '@angular/core';
import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';
import {ItemsForSaleListComponent} from '../items-for-sale-list/items-for-sale-list.component';
import {User} from '../../model/user';
import {GlobalConstants} from '../../common/global-constants';

class ProductListComponent {
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input()
  productList: ItemsForSaleListComponent;
  productIsUploaded = false;

  product = new ItemForSale();
  user = GlobalConstants.user;

  constructor( private productService: ItemForSaleService) {}

  // tslint:disable-next-line:typedef
  public save() {
    this.product.user = this.user;
    this.productService.save(this.product).subscribe((prd: ItemForSale) => this.product = prd);
    this.productIsUploaded = true;
  }

  ngOnInit(): void {
  }

}
