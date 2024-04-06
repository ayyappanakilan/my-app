import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgImageSliderModule,MatDividerModule,MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   
  AutoMove:boolean = true;
  Speed:number = 1.8;
  imageObject: Array<object> = [{
    image: 'assets/img/banner1.png',
    thumbImage: 'assets/img/banner1.png',
    alt: 'alt of image',
    title: 'title of image'
}, 
{
  image: 'assets/img/banner2.png',
  thumbImage: 'assets/img/banner2.png',
  alt: 'alt of image',
  title: 'title of image',
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/img/banner3.png',
  thumbImage: 'assets/img/banner3.png',
  alt: 'alt of image',
  title: 'title of image',
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
, 
{
  image: 'assets/img/banner4.png',
  thumbImage: 'assets/img/banner4.png',
  alt: 'alt of image',
  title: 'title of image',
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];

}
