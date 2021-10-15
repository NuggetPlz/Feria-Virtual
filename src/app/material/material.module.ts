import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
//import { CommonModule } from '@angular/common';

const Material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  declarations: [],
imports: [Material],
exports: [Material]
})
export class MaterialModule { }
