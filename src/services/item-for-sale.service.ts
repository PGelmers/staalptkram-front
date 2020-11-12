import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {ItemForSale} from '../model/item-for-sale';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemForSaleService {

  private itemForSaleUrl = 'api/item-for-sale';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  findAll(): Observable<ItemForSale[]>  {
    return this.http.get<any>('http://localhost:8080/products');
  }

  // tslint:disable-next-line:typedef
  save(product: ItemForSale) {
    return this.http.post('http://localhost:8080/product', product);
  }

  // tslint:disable-next-line:typedef
  delete(id) {
    return this.http.delete('http://localhost:8080/product/' + id);
  }

  getItemForSale(id: number): Observable<ItemForSale> {
    const url = '${this.itemForSaleUrl}/${id}';
    return this.http.get<ItemForSale>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<ItemForSale>(`getItemForSale id=${id}`))
    );
  }

  updateItemForSale(itemForSale: ItemForSale): Observable<any> {
    return this.http.put(this.itemForSaleUrl, itemForSale, this.httpOptions).pipe(
      tap(_ => this.log(`updated item for sale id=${itemForSale.id}`)),
      catchError(this.handleError<any>(`updateItemForSale`))
    );
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // tslint:disable-next-line:typedef
  private log(message: string) {
    this.messageService.add(`ItemForSaleService: ${message}`);
  }
}
