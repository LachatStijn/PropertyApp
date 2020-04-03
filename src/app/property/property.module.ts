import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property.component';
import { ReviewComponent } from './review/review.component';
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyFilterPipe } from '../property-filter.pipe';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [PropertyComponent,ReviewComponent,LocationComponent,UserComponent,PropertyListComponent,AddPropertyComponent, PropertyFilterPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  exports: [PropertyListComponent]
})
export class PropertyModule { }
