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

  filter_search(filtercategory: string) {
    this.itemForSaleService.findAll().subscribe(
      prds => {
        // tslint:disable-next-line:triple-equals
        if (filtercategory == 'ALL') {
          this.reloadAll();
        } else {
          this.products = prds.filter(x => x.category === filtercategory);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  sort_by(sortbyvalue: string) {
    this.itemForSaleService.findAll().subscribe(
      prds => {
        this.products = prds.sort((n1, n2) => {
            if (sortbyvalue.toLocaleLowerCase() === 'id') {
              if (n1.id > n2.id) {
                return 1;
              }
              if (n1.id < n2.id) {
                return -1;
              }
              return 0;
            } else if (sortbyvalue.toLocaleLowerCase() === 'title') {
              if (n1.title > n2.title) {
                return 1;
              }
              if (n1.title < n2.title) {
                return -1;
              }
              return 0;
            } else if (sortbyvalue.toLocaleLowerCase() === 'price') {
              if (n1.price > n2.price) {
                return 1;
              }
              if (n1.price < n2.price) {
                return -1;
              }
              return 0;
            } else if (sortbyvalue.toLocaleLowerCase() === 'category') {
              if (n1.category > n2.category) {
                return 1;
              }
              if (n1.category < n2.category) {
                return -1;
              }
              return 0;
            }
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }
}
