import { Injectable } from '@angular/core';
import { PROPERTIES } from './property/mock-properties';
import { Property } from './property/property.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {
  constructor(private http : HttpClient) { }

  get properties$(): Observable<Property[]>{
    return this.http.get(`${environment.apiUrl}/properties/`)
    .pipe( 
      //catchError(this.handleError),
      map((list: any[]): Property[] => list.map(Property.fromJson)));
  }

  addNewProperty(property:Property): Observable<Property>{
    return this.http.post(`${environment.apiUrl}/properties/`,property.toJSON())
    .pipe(catchError(this.handleError),map(Property.fromJson));
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
