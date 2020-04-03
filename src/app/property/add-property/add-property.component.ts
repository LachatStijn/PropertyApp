import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Property } from '../property.model';
import {Location} from '../location.model';
import {User} from '../user.model';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @Output() public newProperty = new EventEmitter<Property>()
  constructor() { }

  ngOnInit(): void {
  }

  addProperty(titel: HTMLInputElement, omschrijving: HTMLInputElement, numbBath: HTMLInputElement, numbBed: HTMLInputElement, numbToil: HTMLInputElement,/* parking: HTMLInputElement,*/
    street:HTMLInputElement,nummer:HTMLInputElement,postcode:HTMLInputElement,gemeente:HTMLInputElement):boolean {
    const location = new Location(nummer.valueAsNumber,street.value,gemeente.value,postcode.valueAsNumber);
    const property = new Property(titel.value,omschrijving.value,numbBath.valueAsNumber,numbBed.valueAsNumber,numbToil.valueAsNumber,/*Boolean(JSON.parse(parking.value)),*/true,false,false,location,[],new User("stijnlachat","stijn","lachat"));
    this.newProperty.emit(property);

    return false;
  }

}
