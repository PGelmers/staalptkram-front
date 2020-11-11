import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {ItemForSale} from '../model/item-for-sale';

@Injectable({
  providedIn: 'root'
})
export class ItemForSaleService {

  private itemForSaleUrl = 'api/item-for-sale';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    // TODO: message service maken.
    private http: HttpClient,
    private messageService, MessageService) { }

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
