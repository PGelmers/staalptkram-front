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
  filter: string;
  sortbyvalue: string;
  filteruserid: number;

  constructor(private itemForSaleService: ItemForSaleService) {
  }

  ngOnInit() {
    this.reloadAll();
  }

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

  delete(id) {
    this.itemForSaleService.delete(id).subscribe(
      () => this.reloadAll()
    );
  }

  search(filtercategory: string, sortbyvalue: string) {
    this.itemForSaleService.findAll().subscribe(
      prds => {
        if (filtercategory === undefined) {
          filtercategory = 'ALL';
        }
        if (sortbyvalue === undefined) {
          sortbyvalue = 'ID';
        }
        if (filtercategory.toLocaleLowerCase() !== 'all') {
          prds = prds.filter(x => x.category === filtercategory);
        }
        sortbyvalue = sortbyvalue.toLocaleLowerCase();
        this.products = prds
          .sort((n1, n2) => {
              // tslint:disable-next-line:no-eval
              if (eval('n1.' + sortbyvalue) > eval('n2.' + sortbyvalue)) {
                return 1;
              }
              if (eval('n1.' + sortbyvalue) < eval('n2.' + sortbyvalue)) {
                return -1;
              }
              return 0;
            }
          );
      },
      err => {
        console.log(err);
      }
    );
  }

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
}
