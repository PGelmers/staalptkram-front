import {Component, Input, OnInit} from '@angular/core';
import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-items-for-sale-list',
  templateUrl: './items-for-sale-list.component.html',
  styleUrls: ['./items-for-sale-list.component.css']
})
export class ItemsForSaleListComponent implements OnInit {
  products: ItemForSale[];
  filter = 'ALL';
  sortbyvalue = 'ID';
  filteruserid: number;
  @Input()
  user: User;

  constructor(private itemForSaleService: ItemForSaleService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadAll();
  }

  // tslint:disable-next-line:typedef
  reloadAll() {
    if (this.user === undefined) {
      this.itemForSaleService.findAll().subscribe(
        prds => {
          this.products = prds;
        }
      );
    } else {
      this.filter_user(this.user.id);
    }
  }

  // tslint:disable-next-line:typedef
  delete(id) {
    this.itemForSaleService.delete(id).subscribe(
      () => this.search(this.filter, this.sortbyvalue)
    );
  }

  // tslint:disable-next-line:typedef
  search(filtercategory: string, sortbyvalue: string) {
    console.log(filtercategory);
    this.itemForSaleService.findAll().subscribe(
      prds => {
        this.products = prds;
        if (this.user !== undefined) {
          this.products = this.products.filter(x => x.user.id === this.user.id);
          console.log('We zijn in de user-branch van de functie');
        }
        // tslint:disable-next-line:max-line-length
        if (filtercategory.toLocaleLowerCase() !== 'all') {
          this.products = this.products.filter(x => x.category.toLocaleLowerCase() === filtercategory.toLocaleLowerCase());
          console.log('We zijn in de NOT-all-branch van de functie');
        }
        sortbyvalue = sortbyvalue.toLocaleLowerCase();
        this.products = this.products
          .sort((n1, n2) => {
              // tslint:disable-next-line:no-eval
              if (eval('n1.' + sortbyvalue) > eval('n2.' + sortbyvalue)) {
                return 1;
              }
              // tslint:disable-next-line:no-eval
              if (eval('n1.' + sortbyvalue) < eval('n2.' + sortbyvalue)) {
                return -1;
              }
              return 0;
            }
          );

      });
  }

  // tslint:disable-next-line:typedef
  filter_user(id: number) {
    this.itemForSaleService.findAll().subscribe(
      prds => {
        this.products = prds.filter(x => x.user.id === id);
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  setsortvalue(sortvalue: string) {
    this.sortbyvalue = sortvalue;
  }
}
