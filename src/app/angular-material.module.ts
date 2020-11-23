import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    MatFormFieldModule,
  ],
  exports: [
    MatSliderModule,
    MatFormFieldModule
  ]
})

export class AngularMaterialModule { }
