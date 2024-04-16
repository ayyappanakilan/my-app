import { Routes } from '@angular/router';
import { HomeComponent } from './catalog/Components/home/home.component';
import {AboutusComponent} from './catalog/Components/aboutus/aboutus.component';
import { ProductDetailsComponent } from './catalog/Components/product-details/product-details.component';
import { ContactusComponent } from './catalog/Components/contactus/contactus.component';
import { CatagoriesComponent } from './catalog/Components/catagories/catagories.component';
import { MangeImagesComponent } from './admin/components/mange-images/mange-images.component';
import { LoginComponent } from './admin/components/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'contact', component: ContactusComponent},
    {path: 'productdetails', component: ProductDetailsComponent},
    {path: 'category',component:CatagoriesComponent},
    {path: 'manage',component:MangeImagesComponent},{path:'admin',component:LoginComponent}

  
];
