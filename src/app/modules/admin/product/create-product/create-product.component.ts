import { Component,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule,MatCheckboxModule,MatOptionModule,MatDividerModule,MatFormFieldModule,MatIconModule,MatInputModule,MatRadioModule,MatSelectModule,MatCardModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {

}
