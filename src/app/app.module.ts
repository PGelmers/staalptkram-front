import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AngularMaterialModule} from './angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ItemsForSaleListComponent} from './items-for-sale-list/items-for-sale-list.component';
import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemsForSaleListComponent} from './items-for-sale-list/items-for-sale-list.component';
import {NewUserComponent} from './new-user/new-user.component';
import {MessagesComponent} from './messages/messages.component';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {PersonalComponent} from './personal/personal.component';
import {MessageServiceService} from '../services/message-service.service';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {PersonalComponent} from './personal/personal.component';
import {ItemForSaleComponent} from './item-for-sale/item-for-sale.component';
import {PictureUploadRetrieveComponent} from './picture-upload-retrieve/picture-upload-retrieve.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {FakeComponent} from './fake/fake.component';

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
    ImageUploadComponent,
    ProductFormComponent,
    FakeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [
    MessageServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
