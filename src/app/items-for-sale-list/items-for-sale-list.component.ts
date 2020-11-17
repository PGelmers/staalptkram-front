import {Component, OnInit} from '@angular/core';
import {ItemForSale} from '../../model/item-for-sale';
import {ItemForSaleService} from '../../services/item-for-sale.service';

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

  constructor(private itemForSaleService: ItemForSaleService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadAll();
  }

  // tslint:disable-next-line:typedef
  reloadAll() {
    this.itemForSaleService.findAll().subscribe(
      prds => {
        this.products = prds;
      },
      err => {
        console.log(err);
      }
    );
  }
  // tslint:disable-next-line:typedef
  delete(id) {
    this.itemForSaleService.delete(id).subscribe(
      () => this.search(this.filter, this.sortbyvalue)
    );
  }

  // tslint:disable-next-line:typedef
  search(filtercategory: string, sortbyvalue: string) {
    this.itemForSaleService.findAll().subscribe(
      prds => {
        // tslint:disable-next-line:max-line-length
        if (filtercategory.toLocaleLowerCase() !== 'all') {prds = prds.filter(x => x.category.toLocaleLowerCase() === filtercategory.toLocaleLowerCase()); }
        sortbyvalue = sortbyvalue.toLocaleLowerCase();
        this.products = prds
          .sort((n1, n2) => {
                              // tslint:disable-next-line:no-eval
                if (eval('n1.' + sortbyvalue) > eval('n2.' + sortbyvalue)) {
                  return 1;
                }
            // tslint:disable-next-line:no-eval
                if (eval('n1.' + sortbyvalue) < eval('n2.' + sortbyvalue)) {
                  return -1;
                }
                return 0; }
          );
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  filter_user(id: number) {
    this.itemForSaleService.findAll().subscribe(
      prds => {
          this.products = prds.filter(x => x.user.id === id); },
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
