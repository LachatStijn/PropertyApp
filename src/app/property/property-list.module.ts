import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyListComponent } from './property-list/property-list.component';



@NgModule({
  declarations: [PropertyListComponent,AddPropertyComponent],
  imports: [
    CommonModule
  ]
})
export class PropertyListModule { }
