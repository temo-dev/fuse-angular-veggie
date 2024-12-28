import { Component,ViewEncapsulation } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'product',
  standalone: true,
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.None,
  imports:[MatMenuModule,MatButtonModule]
})
export class ProductComponent {

}
