import {Component, OnInit, Optional} from '@angular/core';
import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';

@Component({
  selector: 'app-picture-upload-retrieve',
  templateUrl: './picture-upload-retrieve.component.html',
  styleUrls: ['./picture-upload-retrieve.component.css']
})
export class PictureUploadRetrieveComponent implements OnInit {
  selectedFile: File;
  message: string;
  imageName: any;
  productID: number;
  product = new ItemForSale();

  constructor(public itemForSaleService: ItemForSaleService) {
  }

  // Gets called when the user clicks on retrieve image button to get the image from back end
  getProduct(): void {
    this.itemForSaleService.getItemForSale(this.productID)
      .subscribe(
        (res: ItemForSale) => {
          this.product = res;
        }
      );
  }

  ngOnInit(): void {

  }
}

