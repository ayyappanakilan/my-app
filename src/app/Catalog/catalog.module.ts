import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { CatagoriesComponent } from './Components/catagories/catagories.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    NgImageSliderModule,
    ProductDetailsComponent,
    AboutusComponent,
    ContactusComponent,
    CatagoriesComponent
  ],
  exports:[ProductDetailsComponent]
})
export class CatalogModule { }
