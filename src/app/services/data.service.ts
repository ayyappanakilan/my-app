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
    image: 'assets/img/cotton-mattress1.jpeg',
    thumbImage: 'assets/img/cotton-mattress1.jpeg',
    alt: 'alt of image',
    title: 'COTTON MATTRESS',
    id: 4
  }];

  constructor() { }
}
