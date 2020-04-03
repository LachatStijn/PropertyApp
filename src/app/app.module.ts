
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PropertyModule } from './property/property.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RouterModule, Routes} from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { ReviewComponent } from './property/review/review.component';


const appRoutes:Routes=
[
  {path: 'property/list',component:PropertyListComponent},
  {path:'',redirectTo:'property/list',pathMatch:'full'},
  {path: 'property/reviews',component:ReviewComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PropertyModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
