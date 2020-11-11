import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemForSale} from '../model/item-for-sale';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemForSaleService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<ItemForSale[]>  {
    return this.http.get<any>('http://localhost:8080/products')
  }

  save(product: ItemForSale) {
    return this.http.post('http://localhost:8080/product', product)
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/product/' + id)
  }
}
