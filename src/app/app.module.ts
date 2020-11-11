import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import {MessagesComponent} from './messages/messages.component';
import { ItemForSaleComponent } from './item-for-sale/item-for-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    LoginComponent,
    NewUserComponent,
    ItemForSaleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
