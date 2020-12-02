import {Component, OnInit} from '@angular/core';
import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';
import {GlobalConstants} from '../../common/global-constants';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../../services/image.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productIsUploaded = false;
  product = new ItemForSale();
  user = GlobalConstants.user;
  comesfromedit = false;

  // tslint:disable-next-line:max-line-length
  constructor(private productService: ItemForSaleService, private imageService: ImageService, private route: ActivatedRoute, private router: Router) {
  }

  // tslint:disable-next-line:typedef
  public save() {
    this.product.user = this.user;
    this.productService.save(this.product).subscribe((prd: ItemForSale) => this.product = prd);
    this.productIsUploaded = true;
  }

  // tslint:disable-next-line:typedef
  deleteImage(id: number) {
    console.log(id);
    console.log(this.product.id);
    this.productService.deleteImage(this.product.id, id).subscribe();
    this.router.navigateByUrl('/fake/' + this.product.id);
  }

  ngOnInit(): void {
    if (this.user === undefined) {
      this.router.navigateByUrl('/startscreen');
    }
    this.product.id = Number(this.route.snapshot.paramMap.get('productid'));
    if (this.product.id !== 0) {
      this.comesfromedit = true;
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
