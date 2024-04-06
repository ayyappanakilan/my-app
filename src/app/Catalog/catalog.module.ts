import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    NgImageSliderModule
  ]
})
export class CatalogModule { }
