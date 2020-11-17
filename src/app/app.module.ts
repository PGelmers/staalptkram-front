import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AngularMaterialModule} from './angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemsForSaleListComponent} from './items-for-sale-list/items-for-sale-list.component';
import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';
import {MessagesComponent} from './messages/messages.component';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {PersonalComponent} from './personal/personal.component';
import {ItemForSaleComponent} from './item-for-sale/item-for-sale.component';
import { PictureUploadRetrieveComponent } from './picture-upload-retrieve/picture-upload-retrieve.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsForSaleListComponent,
    MessagesComponent,
    LoginComponent,
    NewUserComponent,
    StartScreenComponent,
    PersonalComponent,
    ItemForSaleComponent,
    PictureUploadRetrieveComponent,
    ImageUploadComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
