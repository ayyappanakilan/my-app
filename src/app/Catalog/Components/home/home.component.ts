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
  imageObject: Array<object> = [];
  category: any[]=[]

  constructor(private _router:Router,private _data:DataService){
    debugger;
    this.category = this._data.categories;
    this.imageObject = this._data.imageObject;

  }
   
categoryClick(obj:any)
{
this._data.category = obj;
this._router.navigate(['/productdetails']);
}

}
