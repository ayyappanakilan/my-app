import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule,Router } from '@angular/router';
import { DataService } from '../../../services/data.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgImageSliderModule,MatDividerModule,MatToolbarModule,MatIconModule,RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  AutoMove:boolean = true;
  Speed:number = 1.8;
  
  imageObject: Array<object> = [{
    image: 'assets/img/kapok-mattress1.webp',
    thumbImage: 'assets/img/kapok-mattress1.webp',
    alt: 'alt of image',
    title: 'Kapok Mattress',
    order: 2
}, 
{
  image: 'assets/img/cotton-mattress.jpeg',
  thumbImage: 'assets/img/cotton-mattress.jpeg',
  alt: 'alt of image',
  title: 'Cotton Mattress',
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/img/banner3.png',
  thumbImage: 'assets/img/banner3.png',
  alt: 'alt of image',
  title: 'title of image',
  order: 3//Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
, 
{
  image: 'assets/img/banner4.png',
  thumbImage: 'assets/img/banner4.png',
  alt: 'alt of image',
  title: 'title of image',
  order: 4 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];

category: any[] = [{
  image: 'assets/img/cotton-mattress1.jpeg',
  thumbImage: 'assets/img/cotton-mattress1.jpeg',
  alt: 'alt of image',
  title: 'COTTON MATTRESS',
  id: 1
},
{
  image: 'assets/img/kapok-mattress1.jpeg',
  thumbImage: 'assets/img/kapok-mattress1.jpeg',
  alt: 'alt of image',
  title: 'KAPOK MATTRESS',
  id: 2
}
,
{
  image: 'assets/img/foam2.webp',
  thumbImage: 'assets/img/foam1.avif',
  alt: 'alt of image',
  title: 'FOAM MATTRESS',
  id: 3
},
{
  image: 'assets/img/cotton-mattress1.jpeg',
  thumbImage: 'assets/img/cotton-mattress1.jpeg',
  alt: 'alt of image',
  title: 'COTTON MATTRESS',
  id: 4
}];

  constructor(private _router:Router,private _data:DataService){

  }
   



categoryClick(obj:any)
{
this._data.category = obj;
this._router.navigate(['/productdetails']);
}

}
