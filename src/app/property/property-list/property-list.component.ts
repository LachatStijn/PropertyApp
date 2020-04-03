import { Component, OnInit } from '@angular/core';
import { Property } from '../property.model';
import { PropertyDataService } from 'src/app/property-data.service';
import { Subject, Observable, EMPTY } from 'rxjs';
import { distinctUntilChanged, map, catchError,  } from 'rxjs/operators';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  private _fetchProperties$: Observable<Property[]>;
  public errorMessage: string = '';
  public filterPropertyGemeente: string;
  public filterProperty$ = new Subject<string>(); //$ om aan te geven dat dit een observable is
  
  constructor(private _propertyDataService:PropertyDataService) {
    this.filterProperty$
    .pipe(
      distinctUntilChanged(),
      map(val => val.toLowerCase()),
    )
    .subscribe(val => this.filterPropertyGemeente = val);
  } //creëeren van attribuut plus initializeren
  
  ngOnInit(): void {
    this._fetchProperties$ = this._propertyDataService.properties$;/*.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );*/
  }

  applyFilter(filter:string){
    this.filterPropertyGemeente = filter;
  }

  get properties$(): Observable<Property[]>{
    return this._fetchProperties$;
  }

  addNewProperty(prop:Property){
    this._propertyDataService.addNewProperty(prop);
  }
}
