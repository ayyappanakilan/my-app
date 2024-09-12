import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  category:any=null;

  categories: any[] = [{
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
    image: 'assets/img/pillow1.jpeg',
    thumbImage: 'assets/img/pillow1.jpeg',
    alt: 'alt of image',
    title: 'COTTON PILLOWS',
    id: 4
  },
  {
    image: 'assets/img/pillow2.jpeg',
    thumbImage: 'assets/img/pillow2.jpeg',
    alt: 'alt of image',
    title: 'KAPOK PILLOWS',
    id: 5
  },
  {
    image: 'assets/img/pillow3.webp',
    thumbImage: 'assets/img/pillow3.webp',
    alt: 'alt of image',
    title: 'FOAM PILLOWS',
    id: 6
  },
  {
    image: 'assets/img/pillow4.jpeg',
    thumbImage: 'assets/img/pillow4.jpeg',
    alt: 'alt of image',
    title: 'RECRON PILLOWS',
    id: 7
  }];

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
selectedCategory:any;
  constructor() { }
}
