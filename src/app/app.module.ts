import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ItemsForSaleListComponent} from './items-for-sale-list/items-for-sale-list.component';
import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';
import {AppRoutingModule} from './app-routing.module';
import {MessagesComponent} from './messages/messages.component';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {PersonalComponent} from './personal/personal.component';
import {MessageServiceService} from '../services/message-service.service';
import {ItemForSaleComponent} from './item-for-sale/item-for-sale.component';
import {PictureUploadRetrieveComponent} from './picture-upload-retrieve/picture-upload-retrieve.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {FakeComponent} from './fake/fake.component';
import {NavbarComponent} from './navbar/navbar.component';
import {OpenstreetmapComponent} from './openstreetmap/openstreetmap.component';



// Angular Material Components

// import {AngularMaterialModule} from './angular-material.module';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

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
    NavbarComponent,
    OpenstreetmapComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [
    MessageServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
