import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemForSaleComponent } from './item-for-sale/item-for-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemForSaleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
