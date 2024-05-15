import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../../services/data.service';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';




@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,FormsModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatCardModule,
    MatButtonModule,CommonModule,MatTabsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})



export class ProductDetailsComponent {

heights: any[] = [
  {value: 6, viewValue: '6'},
  {value: 6.5, viewValue: '6.5'},
  {value: 7, viewValue: '7'},
];

widths: any[] = [
  {value: 2.5, viewValue: '2.5'},
  {value: 3, viewValue: '3'},
  {value: 3.5, viewValue: '3.5'},
  {value: 4, viewValue: '4'},
  {value: 4.5, viewValue: '4.5'},
  {value: 5, viewValue: '5'}
];
price:string="₹ 0";
selectedwidth:any;
selectedheight:any;
constructor(public _data:DataService,private _router:Router)
{

 debugger;
 
  this._data.selectedCategory = this._data.categories[0];

}
ngAfterViewInt()
{
  debugger;
  this._data.selectedCategory = this._data.category;
}
changewidth()
{
  debugger;
  if(this.selectedheight!=undefined && this.selectedwidth!=undefined)
  {
  switch(this._data.selectedCategory.title)
  {
    case "COTTON MATTRESS":
      this.price = "₹ "+(this.selectedwidth + this.selectedheight)*80+" only";
      break;
    case "KAPOK MATTRESS":
      this.price = "₹ "+(this.selectedwidth + this.selectedheight)*200+" only";
      break;
      case "FOAM MATTRESS":
      this.price = "₹ "+(this.selectedwidth + this.selectedheight)*120+" only";
      break;
  }
}
else
{

}
  
}

nodeclick(node: any) {
  this._data.selectedCategory = node;
}
}
