import { Component,Output, EventEmitter } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DataService} from '../../../services/data.service';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Mattress',
    children: [{name: 'Cotton'}, {name: 'Kapok'}, {name: 'Foam'}],
  },
  {
    name: 'Pillows',
    children: [
      
        {name: 'Cotton'}, {name: 'Kapok'},
      
      {
        name: 'Foam'
      },
      {
        name:'Recron'
      }
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-catagories',
  standalone: true,
  imports: [MatTreeModule,MatIconModule,MatButtonModule,MatToolbarModule,ProductDetailsComponent],
  templateUrl: './catagories.component.html',
  styleUrl: './catagories.component.css'
})

export class CatagoriesComponent {

  @Output() newItemEvent = new EventEmitter<any>();

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  

  constructor(private _data:DataService) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
    
  nodeclick(node:any)
  {
    debugger;
    this.newItemEvent.emit(this._data.categories[0]);

  }

  }
  
