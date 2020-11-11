import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { ItemsForSaleListComponent } from './items-for-sale-list/items-for-sale-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import {MessagesComponent} from './messages/messages.component';
import { ItemForSaleComponent } from './item-for-sale/item-for-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsForSaleListComponent,
    MessagesComponent,
    LoginComponent,
    NewUserComponent,
    ItemForSaleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
